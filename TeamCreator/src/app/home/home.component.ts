import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {User, userList} from "../user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList = userList;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(history.state.user == undefined){
      this.router.navigate(['/auth']);
    }
    console.log(history.state.user);
  }

}
