import { TestBed } from '@angular/core/testing';
import { GroupService } from './group.service';
import { groupList } from '../Models/group';
import { UserService } from './user.service';
import { GroupConfigService } from './group-config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GroupService', () => {
  let service: GroupService;
  let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  let groupListTest = groupList;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GroupService],
    });
    service = new GroupService(
      new GroupConfigService(httpClientSpy),
      new UserService(httpClientSpy),
      httpClientSpy
    );
  });

  // Test getGroupbyId
  it('should return the first group', () => {
    service.groupList = groupList;
    expect(service.getGroupbyId(1)).toBe(groupListTest[0]); //Then
  });

  // Test getGroupbyId
  it('should return undefined', () => {
    service.groupList = groupList;
    expect(service.getGroupbyId(0)).toBeUndefined(); //Then
  });

  // Test getGroupbyId
  it('should return false', () => {
    service.groupList = [];
    expect(service.getGroupbyId(0)).toBeFalse(); //Then
  });
});
