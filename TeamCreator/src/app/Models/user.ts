import { Group } from "./group";

/**
 * User Model
 */
export class User {

    //#region Properties

    public login = "";
    public group:Group;

    //#endregion

    /**
     * Constructor Group
     * @param login 
     * @param group 
     */
     constructor(login: string, group: Group) {
        this.login = login;
        this.group = group;
    }
}
