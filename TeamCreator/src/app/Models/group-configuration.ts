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
    public lastGroupConfig = LastGroupConfig.None

    //#endregion

    /**
     * Constructor Group Configuration
     * @param numberUsers 
     * @param maxUsers 
     * @param lastGroupConfig 
     */
     constructor(numberGroups: number, numberUsersByGroup: number, lastGroupConfig: LastGroupConfig) {
        this.numberGroups = numberGroups;
        this.numberUsersByGroup = numberUsersByGroup;
        this.lastGroupConfig = lastGroupConfig;
    }
}
