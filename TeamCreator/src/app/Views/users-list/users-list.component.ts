import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

/**
 * Users list Component
 */
export class UsersListComponent implements OnInit {

  /**
   * UserList
   */
  usersList: Array<User> = new Array<User>();

  /**
   * UserList setter
   */
  @Input() set userList(value: Array<User>) {
    this.usersList = value;
  }

  /**
 * Check user is admin
 */
  isAdmin: boolean = false;

  /**
   * Constructor
   * @param userService 
   */
  constructor() {
    // This is intentional
  }

  ngOnInit(): void {
    this.isAdmin = history.state.user?.name == "admin";
  }

}
