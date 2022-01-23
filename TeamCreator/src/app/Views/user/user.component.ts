import { Component, OnInit } from '@angular/core';
import { groupList } from 'src/app/Models/group';
import {User, userList} from "../../Models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList = userList;
  groupList = groupList;

  userWithoutGroupList: User[] = [];

  constructor() { }

  ngOnInit(): void {
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
