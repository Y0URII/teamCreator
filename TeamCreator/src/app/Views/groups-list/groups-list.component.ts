import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/group';
import { GroupService } from 'src/app/Services/group.service';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})

/**
 * Groups list Component
 */
export class GroupsListComponent implements OnInit {

  groupList: Array<Group> = new Array<Group>();

  /**
   * Check user is admin
   */
  isAdmin: boolean = false;

  /**
   * Subscribe to Groups list
   */
  getGroupsList(): void {
    this.groupService.GetGroups().subscribe(groups => {
      console.log(groups);
      this.groupList = groups;
    });
  }

  /**
   * Constructor
   */
  constructor(private groupService: GroupService) {
    // This is intentional
  }

  /**
   * Check group is full
   * @param group 
   * @returns 
   */
  isGroupFull(group: Group) {
    return group.listUsers != null && group.maxUsers == group.listUsers.length;
  }

  ngOnInit(): void {
    this.isAdmin = history.state.user?.name == "admin";
    this.getGroupsList();
  }
}
