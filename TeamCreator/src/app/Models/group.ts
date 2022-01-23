import { User } from "./user";

/**
 * Group Model
 */
export class Group {

    //#region Properties

    public id = 0;
    public maxUsers = 0;
    public listUsers:Array<User> = new Array<User>();

    //#endregion

    /**
     * Constructor Group
     * @param id 
     * @param maxUsers 
     * @param listUsers 
     */
    constructor(id: number, maxUsers: number) {
        this.id = id;
        this.maxUsers = maxUsers;
    }

    /**
     * Is group full
     * @returns boolean
     */
    public isGroupFull(){
        return this.maxUsers == this.listUsers.length;
    }

    /**
     * Is group activated
     * @returns boolean
     */
    public isActive(){
        return this.listUsers.length > 1;
    }

}
