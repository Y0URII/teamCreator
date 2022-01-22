import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {User} from "../user";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {

    if(this.authForm.value.name == "admin"){
      this.router.navigate(['/admin'], {state: {user: new User(this.authForm.value.name)}});
    } else {
      this.router.navigate(['/home'], {state: {user: new User(this.authForm.value.name)}});
    }
  }

}
