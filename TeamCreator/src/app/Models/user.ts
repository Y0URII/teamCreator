import { Group } from "./group";

export const userList: User[] = [
{ id: 1, name: 'marion', groupId: -1 },
{ id: 2, name: 'issiah', groupId: -1 },
{ id: 3, name: 'vincent', groupId: -1 },
{ id: 4, name: 'damien', groupId: -1 }
];

/**
 * User Model
 */
export class User {

  //#region Properties

  id: number;
  name: string = "";
  groupId: number = -1;

  //#endregion

  // Création de l'utilisateur prenant en paramétre un nom
  constructor(name: string) {
    // Vérification si l'utilisateur exist
    userList.forEach((user) =>{
      if(name.toLowerCase() === user.name){
        this.id = user.id;
        this.name = user.name;
        this.groupId = user.groupId;
      }
    });

    // Nouvel utilisateur
    // @ts-ignore
    if(this.id == null){
        this.id = userList.length + 1;
        this.name = name.toLowerCase();
        userList.push(this);
    }
  }

  // @ts-ignore
  static getUser(userId: number): User{
    let userReturn;
    userList.forEach((user) =>{
      if(user.id === userId){
        userReturn = user;
      }
    });
    // @ts-ignore
    return userReturn;
  }

}
