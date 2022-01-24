import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {GroupService} from "./group.service";
import {GroupConfigService} from "./group-config.service";
import {User, userList} from "../Models/user";
import { HttpClientModule } from '@angular/common/http';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Group, groupList} from "../Models/group";

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  let userListTest = userList;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = new UserService(httpClientSpy);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test AddUser with a new user
  it("should insert a new user", () => {
    let user = new User("test");// Given
    service.addUser(user);//When
    expect(userListTest).toContain(user);//Then
  });

  // Test removeUser
  it("should remove a existing user", () => {
    let user = new User('marion');// Given
    service.removeUser(user);//When
    expect(userListTest).not.toContain(user);//Then
  });

  // Test setGroupToUser
  it("should set a group to user", () => {
    let user = new User('userTest');// Given
    service.userList.push(user);// Given
    service.setGroupToUser(user, 7);//When
    expect(user.groupId).toEqual(7);//Then
  });

  // Test getUserbyName
  it("should return a user with the name asked", () => {
    let userReturn = service.getUserbyName('marion');
    expect(userReturn).toBe(service.userList[0]);//Then
  });

});
