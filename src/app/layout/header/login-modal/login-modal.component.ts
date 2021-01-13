import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.styl']
})
export class LoginModalComponent {
  @Output() login = new EventEmitter<void>();

  onLogin(): void {
    this.login.emit();
  }
}
