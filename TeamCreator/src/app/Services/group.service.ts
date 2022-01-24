import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Group } from '../Models/group';
import { GroupConfiguration, LastGroupConfig } from '../Models/group-configuration';
import { User } from '../Models/user';
import { GroupConfigService } from './group-config.service';
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
   * URL to web api
   */
  private groupUrl = 'api/groups';

  /**
   * http options
   */
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /**
   * List of groups created
   */
  groupList: Array<Group> = new Array<Group>();

  /**
   * Group configuration from service
   */
  configGroup: GroupConfiguration | null = null;

  /**
   * Subscribe to groupConfig from db
   */
  getConfig(): void {
    this.groupConfigService.getGroupConfig().subscribe(config => this.configGroup = config.length != 0 ? config[0] : null);
  }

  //#endregion

  /**
   * Constructor
   * @param groupConfigService
   */
  constructor(private groupConfigService: GroupConfigService,
    private userService: UserService,
    private http: HttpClient) {
    // This is intentional
  }

  //#region Public Methods

  /**
   * Get group list
   * @returns
   */
  public GetGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupUrl)
      .pipe(
        tap((groups: Array<Group>) => console.log(groups)),
        catchError(this.handleError<Group[]>('getGroups'))
      );
  }

  /**
   * Initialize all the groups with the given configuration
   * @param config groupConfiguration
   */
  initializeGroup(): Observable<Array<Group>> {

    return this.http.post<Group[]>(this.groupUrl, this.createGroup(), this.httpOptions)
      .pipe(
        tap((groups: Array<Group>) => {
          console.log("groups added in db");
          console.log(groups);
        }),
        catchError(this.handleError<Array<Group>>('initialize groups'))
      );
  }

  /**
   * Get group by id
   * @param id group id
   * @returns
   */
  public getGroupbyId(id: number) {
    return this.groupList.length != 0 ? this.groupList[id-1] : false;
  }

  /**
   * Add user to group
   * @param id group id
   * @param name user name
   */
  public addUserToGroup(id: number, name: string) {
    let group = this.groupList[id];
    if (group.maxUsers != group.listUsers.length) {
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

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //#endregion

  //#region Private Methods

  public createGroup() {
    this.getConfig();
    this.groupList = new Array<Group>();

    if (this.configGroup != null) {

      // Create group
      for (let index = 0; index < this.configGroup.numberGroups; index++) {
        this.groupList.push(new Group(index, this.configGroup.numberUsersByGroup, new Array<User>()));
      }

      // Change user capacity
      switch (this.configGroup.lastGroupConfig) {
        case LastGroupConfig.LastMax:
          this.groupList[this.configGroup.numberGroups - 1].maxUsers = this.configGroup.numberUsersByGroup + 1;
          break;
        case LastGroupConfig.LastMax:
          this.groupList[this.configGroup.numberGroups - 1].maxUsers = this.configGroup.numberUsersByGroup - 1;
          break;
        default:
          break;
      }
      return this.groupList;
    }
    return new Array<Group>();
  }

  //#endregion
}
