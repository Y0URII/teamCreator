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

  invitationLink: string = '';

  groupList = groupList;
  tmpGroupList = tmpGroupList;
  user = history.state.user;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createGroup(ownerId: number){
    if(this.createForm.value.maxUser === ''){
      this.createForm.value.maxUser = 3
    }
    let newtmpGroup = new Group(groupList.length + tmpGroupList.length + 1, this.createForm.value.maxUser, [User.getUser(ownerId)]);
    this.invitationLink = this.generateInvitation(newtmpGroup.id);
    tmpGroupList.push(newtmpGroup);
  }

  generateInvitation(groupId: number) {
    const crypto = window.crypto;
    var array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return window.location.origin + "/invit/" + crypto.getRandomValues(array).toString().substr(2, 9) + "?g="+groupId
  }


  joinGroup(groupId: number, user: User){
    groupList.forEach((group) =>{
      if(group.id === groupId){
        group.listUsers.push(user);
        user.group = groupId;
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
      const crypto = window.crypto;
      var array = new Uint32Array(1);
      crypto.getRandomValues(array)
      // @ts-ignore
      let randomGroupId = possibleGroupTab[Math.floor(crypto.getRandomValues(array) * possibleGroupTab.length)];
      this.joinGroup(randomGroupId, history.state.user);
      history.state.user.group = randomGroupId;
      this.router.navigate(['/home'], {state: {user: history.state.user, group: randomGroupId}});
    } else {
      alert("Tout les groupes sont actuellement plein");
    }
  }

}
