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

    public numberGroups = 0;
    public numberUsersByGroup = 0;
    public lastGroupConfig = LastGroupConfig.None;
    public totalUsers = 0;

    //#endregion

    /**
     * Constructor Group Configuration
     * @param numberUsers 
     * @param maxUsers 
     * @param lastGroupConfig 
     */
     constructor(numberGroups: number, numberUsersByGroup: number, lastGroupConfig: LastGroupConfig, totalUsers: number) {
        this.numberGroups = numberGroups;
        this.numberUsersByGroup = numberUsersByGroup;
        this.lastGroupConfig = lastGroupConfig;
        this.totalUsers = totalUsers;
    }
}
