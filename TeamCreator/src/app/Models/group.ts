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
    constructor(id: number, maxUsers: number, listUsers: Array<User>) {
        this.id = id;
        this.maxUsers = maxUsers;
        this.listUsers = listUsers;
    }

}
