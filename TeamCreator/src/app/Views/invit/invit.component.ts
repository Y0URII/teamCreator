import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../Models/user";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-invit',
  templateUrl: './invit.component.html',
  styleUrls: ['./invit.component.css']
})
export class InvitComponent implements OnInit {

  idGroup: number | undefined;

  invitForm = new FormGroup({
    name: new FormControl(''),
  });

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idGroup = params['g'];
      console.log(this.idGroup); // Print the parameter to the console.
    });
  }

  onSubmit() {
    if(this.invitForm.value.name == "admin"){
      alert("Vous ne pouvez pas rejoindre de groupe avec cette username");
      this.router.navigate(['/admin'], {state: {user: new User(this.invitForm.value.name)}});
    } else {
      let user = new User(this.invitForm.value.name)
      user.group = this.idGroup;
      this.router.navigate(['/home'], {state: {user: user}});
    }
  }

}
