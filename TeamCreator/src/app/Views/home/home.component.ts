import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User, userList } from 'src/app/Models/user';
import {Group, groupList} from "../../Models/group";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList = userList;
  groupList = groupList;
  user = history.state.user;
  group = history.state.group;

  userWithoutGroupList: User[] = [];

  constructor(private router: Router) { }


  // Si l'utiliseur n'est pas connecté, redirection vers l'authentification
  ngOnInit(): void {
    if(history.state.user == undefined){
      this.router.navigate(['/auth']);
    }
    let userInGroupTab: number[] = [];
    groupList.forEach((group) =>{
      group.listUsers.forEach((userInGroup) =>{
        if(!userInGroupTab.includes(userInGroup.id)){
          userInGroupTab.push(userInGroup.id);
        }
      });
    });

    userList.forEach((user) =>{
      if(!userInGroupTab.includes(user.id)){
        this.userWithoutGroupList.push(user)
      }
    });
  }

}
