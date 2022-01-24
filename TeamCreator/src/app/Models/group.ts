import { User } from "./user";


export let groupList: Group[] = [
  { id: 1, maxUsers: 3, listUsers: [{ id: 1, name: 'marion', groupId: 1}, { id: 2, name: 'issiah', groupId: 1}] },
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
    constructor(id: number, maxUsers: number, listUsers: User[] | undefined ) {
        this.id = id;
        this.maxUsers = maxUsers;
        if(listUsers != null){
          this.listUsers = listUsers;
        }
    }

}
