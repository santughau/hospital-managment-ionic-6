import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  //property Intislization
  login = {
    email: "",
    password: ""
  };
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

  //login with facebook
  facebookLogin() {
    console.log("Facebook");
    //this.router.navigate(['setting']);
  }


//login with twitter
  twitterLogin() {
    console.log("Twitter");
    //this.router.navigate(['setting']);
  }

  //login with gamilLogin
  gmailLogin() {
    console.log("Gmail");
    //this.router.navigate(['setting']);
  }


//Go to register page
  goToRegister() {
    this.router.navigate(['register']);
  }

  //Go to Forget page
  goToForget() {
    console.log("Forget");
    this.router.navigate(['/reset-password']);
  }

  //Go to Home page
  goToHome() {
    console.log(this.login); 
    this.router.navigate(['/home']);
  }
}
