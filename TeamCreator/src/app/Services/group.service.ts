import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Group } from '../Models/group';
import { GroupConfiguration, LastGroupConfig } from '../Models/group-configuration';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Group Service
 */
export class GroupService {

  //#region Fields

  /**
   * List of groups created
   */
  groupList: Array<Group> = new Array<Group>();

  /**
   * Group configuration from service
   */
  configGroup: GroupConfiguration | null = null;

  //#endregion

  /**
   * Constructor
   * @param groupConfigService 
   */
  constructor(private userService: UserService) {
    // This is intentional
  }

  //#region Public Methods

  /**
   * Initialize all the groups with the given configuration
   * @param config groupConfiguration
   */
  public initializeGroup(config: GroupConfiguration) {
    this.groupList = new Array<Group>();
    this.configGroup = config;

    // Create group
    for (let index = 0; index < config.numberGroups; index++) {
      this.groupList.push(new Group(index, config.numberUsersByGroup));
    }

    // Change user capacity
    switch (config.lastGroupConfig) {
      case LastGroupConfig.LastMax:
        this.groupList[config.numberGroups - 1].maxUsers = config.numberUsersByGroup + 1;
        break;
      case LastGroupConfig.LastMax:
        this.groupList[config.numberGroups - 1].maxUsers = config.numberUsersByGroup - 1;
        break;
      default:
        break;
    }
  }

  /**
   * Get group by id
   * @param id group id
   * @returns 
   */
  public getGroupbyId(id: number) {
    return this.groupList.length != 0 ? this.groupList[id] : false;
  }

  /**
   * Add user to group
   * @param id group id
   * @param name user name
   */
  public addUserToGroup(id: number, name: string) {
    let group = this.groupList[id];
    if (!group.isGroupFull()) {
      let user = this.userService.getUserbyName(name);
      if (user != null) {
        // add user to group
        this.groupList[id].listUsers.push(user);
        // add group to user
        this.userService.setGroupToUser(user, group.id);
      }
    }
  }

  /**
   * remove user from group and reset user group
   * @param userName 
   * @param groupId 
   */
  public removeUserFromGroup(userName: string, groupId: number) {
    let user = this.userService.getUserbyName(userName);
    let group = this.groupList.find(groupe => groupe.id == groupId);

    if (user != null && group != null) {
      let groupIndex = this.groupList.findIndex(g => g == group);
      let userIndex = group.listUsers.findIndex(u => u == user);

      this.groupList[groupIndex].listUsers.splice(userIndex);
      this.userService.setGroupToUser(user, -1);
    }
  }

  /**
   * Get group list
   * @param all every groups
   * @returns 
   */
  public getGroups(all: boolean): Observable<Group[]> {
    let result = all ? this.groupList : this.groupList.filter(group => group.isActive());
    const groups = of(result);
    return groups;
  }

  //#endregion

  //#region Private Methods

  //#endregion
}
