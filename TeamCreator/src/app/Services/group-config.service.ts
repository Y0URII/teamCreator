import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  * Group Configuration
  */
  private groupConfiguration: GroupConfiguration | null = null;

  //#endregion

  /**
   * Constructor
   */
  constructor() { }

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
  public setGroupConfig(data:any){
    if(data){
      console.log("Starting try set up group");
      console.log(data + "\n");
      let totalUsers: number = data.totalUsers;
      let usersByGroup: number = data.usersByGroup;
      //configLastGroup

      // Equal number of users in group
      if(totalUsers % usersByGroup == 0){
        console.log("equal number\n");
        this.groupConfiguration = new GroupConfiguration(totalUsers / usersByGroup, usersByGroup, LastGroupConfig.None);
      }
      // Use last group configuration parameter
      else {
        console.log("Not so easy\n");
        let config = data.configLastGroup == LastGroupConfig.LastMax ? LastGroupConfig.LastMax : LastGroupConfig.LastMin;

        let target:number = totalUsers;
        if(config == LastGroupConfig.LastMax){
          target -= 1;
        } else if (config == LastGroupConfig.LastMin){
          target += 1;
        }

        let realNbUsersByGroup = this.findUsersByGroupRepartition(target, usersByGroup, config);
        let realNbGroup = target / realNbUsersByGroup;
        this.groupConfiguration = new GroupConfiguration(realNbGroup, realNbUsersByGroup, config);
        console.log("RESULT = realNbGroup:" + realNbGroup + " realNbUsersByGroup =" + realNbUsersByGroup + " config=" + config);
      }
  
      //TODO: call group service to create group
    }
  }

  //#region Privates Methods

  /**
   * Return optimal number of users by group
   * @param target 
   * @param usersByGroupWanted 
   * @param config 
   * @returns 
   */
  private findUsersByGroupRepartition(target:number, usersByGroupWanted:number, config:LastGroupConfig ){
    console.log("Start finding nb group...\n");
    console.log(config)

    let divisorList:Array<number> = this.findDivisor(target);
    console.log("Divisor found: ");
    divisorList.forEach(e=> console.log(e));

    let result:number = 0;
    
    if (divisorList.length == 1){
      result = divisorList[0];
    }
    // Get closest match
    else if (divisorList.length > 1){
      result = this.findClosestResult(divisorList, usersByGroupWanted);
    }
    console.log("Result: " + result);

    return result;
  }

  /**
   * Return the closest match from the list of possibilities
   * @param list possibilities
   * @param target desired number
   * @returns 
   */
  private findClosestResult(list: Array<number>, target: number){
    let difference = list[0] > target ? list[0] - target : target - list[0];
    let result = list[0];

    console.log("start finding closest result");
    console.log("difference= " + difference + ", result= " + result);

    for (let index = 1; index < list.length; index++) {
      let newDifference = list[index] > target ? list[index] - target : target - list[index];
      if(newDifference < difference){
        difference = newDifference;
        result = list[index];
        console.log("difference= " + difference + ", result= " + result);
      }
    }
    return result;
  }

  /**
   * Return prime number under the given number
   * @param target 
   * @returns 
   */
  private findDivisor(target:number){

    let results:Array<number> = new Array<number>();

    for (let index = target-1; index > 1; index--) {
      if(target % index == 0){
        results.push(index);
      }
    }
 
    return results;
  }

  //#endregion
}
