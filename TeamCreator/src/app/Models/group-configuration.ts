enum LastGroupConfig {
    None = "NONE",
    LastMin = "LAST_MIN",
    LastMax = "LAST_MAX"
}

export class GroupConfiguration {

    //#region Properties

    public numberUsers = 0;
    public numberGroups = 0;
    public lastGroupConfig = LastGroupConfig.None

    //#endregion

    /**
     * Constructor of GroupConfiguration
     * @param data 
     */
    constructor(data?:any){
        if (data){
          if (data.hasOwnProperty('numberUsers')){ 
            this.numberUsers = data.id; 
          }
          if (data.hasOwnProperty('numberGroups')){ 
            this.numberGroups = data.numberGroups; 
          }      
          if (data.hasOwnProperty('lastGroupConfig')){ 
            this.lastGroupConfig = data.texture; 
          }
        }
      }
}
