import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  login = {
    email: "",
};
  constructor(private router : Router) { }

  ngOnInit() {
  }
//Go to Sign In  page
  goToSignIn() {
    this.router.navigate(['sent-code']);
  }
}
