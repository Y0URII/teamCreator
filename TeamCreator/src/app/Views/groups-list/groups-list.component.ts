import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/group';
import { GroupService } from 'src/app/Services/group.service';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {

  groupList: Array<Group> = new Array<Group>();

  /**
   * Groups list
   */
  getGroupsList(): void {
    this.groupService.getGroups(this.isAdmin).subscribe(groups => this.groupList = groups);
  };

  /**
   * Check user is admin
   */
  isAdmin: boolean = false;

  /**
   * Constructor
   */
  constructor(private groupService: GroupService) {
    // This is intentional
  }

  ngOnInit(): void {
    this.isAdmin = history.state.user?.name == "admin";
  }
}
