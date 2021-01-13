import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  isModalVisible: boolean;
  isShowInput: boolean;
  loginStatus: boolean;
  userName: string;

  form = new FormGroup({
    name: new FormControl()
  });

  constructor() {
    this.isModalVisible = false;
    this.isShowInput = false;
    this.loginStatus = false;
  }

  ngOnInit(): void {
    const localUserName = localStorage.getItem('name');
    const localLoginStatus = localStorage.getItem('login-status');

    if (localUserName) {
      this.form.patchValue({ name: localUserName });
    }

    if (localLoginStatus) {
      this.loginStatus = JSON.parse(localLoginStatus);
    }
  }

  openModal(): void {
    document.body.style.overflow = 'hidden';
    this.isModalVisible = true;
  }

  closeModal(e): void {
    if (e.target.className === 'modal__overlay') {
      document.body.style.overflow = 'auto';
      this.isModalVisible = false;
    }
  }

  setInputFocus(): void {
    this.isShowInput = true;
  }

  setInputFocusOut(): void {
    this.isShowInput = false;
    this.userName = this.form.controls.name.value;
    if (this.userName === '') {
      this.form.patchValue({ name: 'Имя' });
    }
    localStorage.setItem('name', this.userName);
  }

  login(): void {
    this.loginStatus = true;
    this.form.patchValue({ name: 'Имя' });
    document.body.style.overflow = 'auto';
    this.isModalVisible = false;
    localStorage.setItem('login-status', this.loginStatus.toString());
  }

  logout(): void {
    this.loginStatus = false;
    localStorage.setItem('login-status', this.loginStatus.toString());
  }
}
