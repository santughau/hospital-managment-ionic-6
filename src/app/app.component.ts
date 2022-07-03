import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Sign In Page', url: '/sign-in', icon: 'mail' },
    { title: 'Register Page', url: '/register', icon: 'mail' },
    { title: 'Reset Password Page', url: '/reset-password', icon: 'mail' },
    { title: 'Sent Code Page', url: '/sent-code', icon: 'mail' },
    { title: 'New Password Page', url: '/new-password', icon: 'mail' },
  ];
 
  constructor() {}
}
