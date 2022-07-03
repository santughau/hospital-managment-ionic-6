import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sent-code',
  templateUrl: './sent-code.page.html',
  styleUrls: ['./sent-code.page.scss'],
})
export class SentCodePage implements OnInit {
  login = {
    code: "",
};
  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToSignIn() {
    this.router.navigate(['new-password']);
  }
}
