import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.styl']
})
export class LoginModalComponent {
  @Output() login = new EventEmitter<void>();

  loginForm = new FormGroup({
    username: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ]),
    remember: new FormControl()
  });

  onLogin(): void {
    this.login.emit();
  }

  isControlInvalid(control: string): boolean {
    return this.loginForm.controls[control].invalid && this.loginForm.controls[control].touched;
  }
}
