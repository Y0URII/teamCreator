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
  public setGroupConfig(totalUsers:number,usersByGroup:number,lastConfig:LastGroupConfig){
    //Equal number of users in group
    if(totalUsers % usersByGroup == 0){
      this.groupConfiguration = new GroupConfiguration(totalUsers, usersByGroup, LastGroupConfig.None);
    }
    //Last group has more users
    else if(lastConfig == LastGroupConfig.LastMax){
      this.groupConfiguration = new GroupConfiguration(totalUsers, totalUsers % usersByGroup, LastGroupConfig.LastMax);
    }
    else {
      // TODO : 
      //this.groupConfiguration = new GroupConfiguration(totalUsers % usersByGroup, usersByGroup, LastGroupConfig.LastMin);
    }

    //TODO: call group service to create group
  }
}
