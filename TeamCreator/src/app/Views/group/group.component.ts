import {Component, OnInit} from '@angular/core';
import {Group, groupList, tmpGroupList} from "../../Models/group";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../Models/user";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {


  createForm = new FormGroup({
    maxUser: new FormControl(''),
    ownerId: new FormControl(''),
  });

  groupList = groupList;
  tmpGroupList = tmpGroupList;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createTmpGroup(ownerId: number){

    let newtmpGroup = new Group(groupList.length + tmpGroupList.length + 1, this.createForm.value.maxUser, []);
    let invitationLink = this.generateInvitation(newtmpGroup.id);
    tmpGroupList.push(newtmpGroup);
  }

  generateInvitation(groupId: number) {
    return window.location.origin + "/invit/" + Math.random().toString(36).substr(2, 9) + "?="+groupId
  }

  getUser(){

  }

  joinGroup(groupId: number, user: User){
    groupList.forEach((group) =>{
      if(group.id === groupId){
        group.listUsers.push(user);
      }
    });
  }


  joinRandomGroup(){
    let possibleGroupTab: number[] = [];
    groupList.forEach((group) =>{
      if(group.listUsers.length < group.maxUsers){
        possibleGroupTab.push(group.id);
      }
    });

    // @ts-ignore
    if(possibleGroupTab.length !== 0){
      let randomGroupId = possibleGroupTab[Math.floor(Math.random() * possibleGroupTab.length)];
      this.joinGroup(randomGroupId, history.state.user);
      this.router.navigate(['/'], {state: {user: history.state.user, group: randomGroupId}});
    } else {
      alert("Tout les groupes sont actuellement plein");
    }
  }

}
