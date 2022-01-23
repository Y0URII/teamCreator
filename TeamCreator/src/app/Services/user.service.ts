import { Injectable } from '@angular/core';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})

/**
 * User Service
 */
export class UserService {

  //#region Fields

  /**
   * List of users online
   */
  userList: Array<User> = new Array<User>();

  //#endregion

  /**
   * Constructor
   */
  constructor() {
    // This is intentional
  }

  //#region Public Method

  public addUser(user: User) {
    if (this.isUserUnique(user.name)) {
      this.userList.push(user);
    }
  }

  /**
   * Remove user in list
   * @param user 
   */
  public removeUser(user: User) {
    this.userList.splice(this.userList.findIndex(u => u == user));
  }

  /**
   * Check username is unique
   * @param name 
   * @returns boolean
   */
  public isUserUnique(name: string) {
    return this.userList.every(user => user.name != name);
  }

  public setGroupToUser(user: User, groupId: number) {
    let index = this.userList.findIndex(u => u == user);
    if (index != -1) {
      this.userList[index].groupId = groupId;
    }
  }

  /**
   * Get user by name
   * @param id user.name
   * @returns user
   */
  public getUserbyName(name: string) {
    return this.userList.find(user => user.name == name);
  }

  /**
   * Get users list
   * @returns users list
   */
  public getUsers() {
    return this.userList;
  }

  //#endregion

}
