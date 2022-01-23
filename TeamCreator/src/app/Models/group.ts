import { User } from "./user";


export const groupList: Group[] = [
  { id: 1, maxUsers: 3, listUsers: [{ id: 1, name: 'marion', group: 1}, { id: 2, name: 'issiah', group: 1}] },
  { id: 2, maxUsers: 2, listUsers: [] },
  { id: 3, maxUsers: 1, listUsers: [] },
];

export const tmpGroupList: Group[] = [];

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
