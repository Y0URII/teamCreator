/**
 * LastGroupConfiguration enum
 */
export enum LastGroupConfig {
    None = "NONE",
    LastMin = "LAST_MIN",
    LastMax = "LAST_MAX"
}

/**
 * GroupConfiguration Model
 */
export class GroupConfiguration {

    //#region Properties

    public totalNumberUsers = 0;
    public numberUsersByGroup = 0;
    public lastGroupConfig = LastGroupConfig.None

    //#endregion

    /**
     * Constructor Group Configuration
     * @param numberUsers 
     * @param maxUsers 
     * @param lastGroupConfig 
     */
     constructor(totalNumberUsers: number, numberUsersByGroup: number, lastGroupConfig: LastGroupConfig) {
        this.totalNumberUsers = totalNumberUsers;
        this.numberUsersByGroup = numberUsersByGroup;
        this.lastGroupConfig = lastGroupConfig;
    }
}
