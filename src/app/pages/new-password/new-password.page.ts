import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {
  login = {
    password: "",
    cpassword: "",
};
  constructor(private router : Router) { }

  ngOnInit() {
  }
  goToSignIn() {
    this.router.navigate(['sign-in']);
  }

  resendPassword() {
    console.log("Password Resented");
    
  }
}
