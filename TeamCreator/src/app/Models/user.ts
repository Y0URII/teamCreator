export const userList: User[] = [
{ id: 1, name: 'marion', group: undefined},
{ id: 2, name: 'issiah', group: undefined},
{ id: 3, name: 'vincent', group: undefined},
{ id: 4, name: 'damien', group: undefined},
];

/**
 * User Model
 */
export class User {

    id: number;
  name: string = '';
  group: number | undefined;

  // Création de l'utilisateur prenant en paramétre un nom
  constructor(name: string) {
    // Vérification si l'utilisateur exist
    userList.forEach((user) =>{
      if(name.toLowerCase() === user.name){
        this.id = user.id;
        this.name = user.name;
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
