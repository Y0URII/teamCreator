import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { GroupConfiguration, LastGroupConfig } from '../Models/group-configuration';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})

/**
 * GroupConfiguration Service
 */
export class GroupConfigService {

  //#region Fields

  /**
   * URL to web api
   */
  private configUrl = 'api/config';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /**
  * Group Configuration
  */
  private groupConfiguration: GroupConfiguration = new GroupConfiguration(0, 0, LastGroupConfig.None, 0);

  //#endregion

  /**
   * Constructor
   */
  constructor(private groupService: GroupService, private http: HttpClient) {
    // This is intentional
  }

  /**
   * Get Group Configuration
   * @returns GroupConfiguration
   */
  public getGroupConfig(): Observable<GroupConfiguration> {
    return this.http.get<GroupConfiguration>(this.configUrl)
                    .pipe(
                      catchError(this.handleError<GroupConfiguration>('getConfig'))
                    );
  }

  /**
   * Set Group Configuration
   * @param totalUsers 
   * @param usersByGroup 
   * @param lastConfig 
   */
  public setGroupConfig(data: GroupConfiguration): Observable<GroupConfiguration> {
    
    if (data) {
      let totalUsers: number = data.totalUsers;
      let usersByGroup: number = data.numberUsersByGroup;

      // Equal number of users in group
      if (totalUsers % usersByGroup == 0) {
        this.setGroupConfiguration(totalUsers / usersByGroup, usersByGroup, LastGroupConfig.None, totalUsers);
      }
      // Use last group configuration parameter
      else {
        let config = data.lastGroupConfig == LastGroupConfig.LastMax ? LastGroupConfig.LastMax : LastGroupConfig.LastMin;

        let target: number = totalUsers;
        if (config == LastGroupConfig.LastMax) {
          target -= 1;
        } else if (config == LastGroupConfig.LastMin) {
          target += 1;
        }

        let realNbUsersByGroup = this.findUsersByGroupRepartition(target, usersByGroup);
        let realNbGroup = target / realNbUsersByGroup;
        this.setGroupConfiguration(realNbGroup, realNbUsersByGroup, config, totalUsers);
      }

      // Create groups
      if (this.groupConfiguration != null) {
        this.groupService.initializeGroup(this.groupConfiguration);
      }
    }
    return this.http.post<GroupConfiguration>(this.configUrl, this.groupConfiguration, this.httpOptions)
    .pipe(
      tap((newConfig : GroupConfiguration) => console.log("config added in db")),
      catchError(this.handleError<GroupConfiguration>('addGroupDonfig'))
    );
  }

  //#region Privates Methods

  /**
   * Set private group configuration
   * @param nbGroups 
   * @param nbUsersByGroup 
   * @param config 
   */
  private setGroupConfiguration(nbGroups: number, nbUsersByGroup: number, config: LastGroupConfig, totalUsers: number) {
    if (nbUsersByGroup > 1) {
      this.groupConfiguration = new GroupConfiguration(nbGroups, nbUsersByGroup, config, totalUsers);
    }
  }

  /**
   * Return optimal number of users by group
   * @param target 
   * @param usersByGroupWanted 
   * @returns 
   */
  private findUsersByGroupRepartition(target: number, usersByGroupWanted: number) {

    let divisorList: Array<number> = this.findDivisor(target);
    let result: number = 0;

    if (divisorList.length == 1) {
      result = divisorList[0];
    }
    // Get closest match
    else if (divisorList.length > 1) {
      result = this.findClosestResult(divisorList, usersByGroupWanted);
    }

    return result;
  }

  /**
   * Return the closest match from the list of possibilities
   * @param list possibilities
   * @param target desired number
   * @returns 
   */
  private findClosestResult(list: Array<number>, target: number) {
    let difference = list[0] > target ? list[0] - target : target - list[0];
    let result = list[0];

    for (let index = 1; index < list.length; index++) {
      let newDifference = list[index] > target ? list[index] - target : target - list[index];
      if (newDifference < difference) {
        difference = newDifference;
        result = list[index];
      }
    }
    return result;
  }

  /**
   * Return prime number under the given number
   * @param target 
   * @returns 
   */
  private findDivisor(target: number) {

    let results: Array<number> = new Array<number>();

    for (let index = target - 1; index > 1; index--) {
      if (target % index == 0) {
        results.push(index);
      }
    }

    return results;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //#endregion
}
