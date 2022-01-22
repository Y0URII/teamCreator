import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as internal from 'stream';
import { Group } from '../Models/group';
import { GroupConfiguration, LastGroupConfig } from '../Models/group-configuration';

@Injectable({
  providedIn: 'root'
})

/**
 * GroupConfiguration Service
 */
export class GroupConfigService {

  //#region Fields

  /**
 * List Of Group
 */
    private listGroups:Array<Group> = new Array<Group>();

    /**
    * Group Configuration
    */
    private groupConfiguration: GroupConfiguration = new GroupConfiguration(0,0, LastGroupConfig.None);

  //#endregion

  /**
   * Constructor
   * @param _httpClient 
   */
  constructor(private _httpClient: HttpClient) { 

  }

  /**
   * Get Group Configuration
   * @returns GroupConfiguration
   */
  public getGroupConfig(){
    return this.groupConfiguration;
  }

  /**
   * Set Group Configuration
   * @param totalUsers 
   * @param usersByGroup 
   * @param lastConfig 
   */
  public setGroupConfig(totalUsers:number, usersByGroup:number, lastConfig:LastGroupConfig){
    // Equal number of users in group
    if(totalUsers % usersByGroup == 0){
      this.groupConfiguration = new GroupConfiguration(totalUsers % usersByGroup, usersByGroup, LastGroupConfig.None);
    }
    // Use last group configuration parameter
    else {
      let realNbUsersByGroup = this.findUsersByGroupRepartition(totalUsers, usersByGroup, lastConfig);
      this.groupConfiguration = new GroupConfiguration(totalUsers, totalUsers % realNbUsersByGroup, LastGroupConfig.LastMax);
    }

    //TODO: call group service to create group
  }

  /**
   * Return optimal number of users by group
   * @param totalUsers 
   * @param usersByGroupWanted 
   * @param config 
   * @returns 
   */
  private findUsersByGroupRepartition(totalUsers:number, usersByGroupWanted:number, config:LastGroupConfig ){
    let target:number = (config == LastGroupConfig.LastMax) ? totalUsers+ 1 : totalUsers -1;

    let divisorList:Array<number> = this.findPrimeNumbers(target);

    let result:number = 0;
    
    if (divisorList.length == 1){
      result = divisorList[0];
    }
    // Get closest match
    else if (divisorList.length > 1){
      result = divisorList.reduce(function(prev, curr) {
        return (Math.abs(curr - usersByGroupWanted) < Math.abs(prev - usersByGroupWanted) ? curr : prev);
      })
    }

    return result;
  }

  /**
   * Return prime number under the given number
   * @param target 
   * @returns 
   */
  private findPrimeNumbers(target:number){

    let results:Array<number> = new Array<number>();

    for (let index = target-1; index >= 2; index--) {
      if(target % index == 0){
        results.push(index);
      }
    }
    return results;
  }
}
