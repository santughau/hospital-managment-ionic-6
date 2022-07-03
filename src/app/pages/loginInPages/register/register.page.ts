import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 //property Intislization
 login = {
    email: "",
    password: "",
    userName: "",
    mobile:""
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


//Go to Sign In  page
goToSignIn() {
    this.router.navigate(['sign-in']);
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
