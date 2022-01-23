import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
  * Group Configuration
  */
  private groupConfiguration: GroupConfiguration = new GroupConfiguration(0, 0, LastGroupConfig.None);

  /**
   * Indicate if an error happened on the set configuration
   */
  private isSetError: boolean = true;

  //#endregion

  /**
   * Constructor
   */
  constructor(private groupService: GroupService) {
    // This is intentional
  }

  /**
   * Get Group Configuration
   * @returns GroupConfiguration
   */
  public getGroupConfig(): Observable<GroupConfiguration> {
    const config = of(this.groupConfiguration);
    return config;
  }

  /**
   * Get is set error
   * @returns boolean
   */
  public getErrorConfig(): Observable<boolean> {
    const error = of(this.isSetError);
    return error;
  }

  /**
   * Set Group Configuration
   * @param totalUsers 
   * @param usersByGroup 
   * @param lastConfig 
   */
  public setGroupConfig(data: any) {
    this.isSetError = true;
    if (data) {
      let totalUsers: number = data.totalUsers;
      let usersByGroup: number = data.usersByGroup;

      // Equal number of users in group
      if (totalUsers % usersByGroup == 0) {
        this.setGroupConfiguration(totalUsers / usersByGroup, usersByGroup, LastGroupConfig.None);
      }
      // Use last group configuration parameter
      else {
        let config = data.configLastGroup == LastGroupConfig.LastMax ? LastGroupConfig.LastMax : LastGroupConfig.LastMin;

        let target: number = totalUsers;
        if (config == LastGroupConfig.LastMax) {
          target -= 1;
        } else if (config == LastGroupConfig.LastMin) {
          target += 1;
        }

        let realNbUsersByGroup = this.findUsersByGroupRepartition(target, usersByGroup);
        let realNbGroup = target / realNbUsersByGroup;
        this.setGroupConfiguration(realNbGroup, realNbUsersByGroup, config);
      }

      // Create groups
      if (this.groupConfiguration != null && !this.isSetError) {
        this.groupService.initializeGroup(this.groupConfiguration);
      }
    }
  }

  //#region Privates Methods

  /**
   * Set private group configuration
   * @param nbGroups 
   * @param nbUsersByGroup 
   * @param config 
   */
  private setGroupConfiguration(nbGroups: number, nbUsersByGroup: number, config: LastGroupConfig) {
    if (nbUsersByGroup > 1) {
      this.groupConfiguration = new GroupConfiguration(nbGroups, nbUsersByGroup, config);
      this.isSetError = false;
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

  //#endregion
}
