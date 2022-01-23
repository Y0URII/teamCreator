export const userList: User[] = [
{ id: 1, name: 'marion' },
{ id: 2, name: 'issiah' },
{ id: 3, name: 'vincent' },
{ id: 4, name: 'damien' },
];

/**
 * User Model
 */
export class User {

    id: number;
  name: string | undefined;

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
}
