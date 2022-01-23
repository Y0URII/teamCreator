import { Injectable } from '@angular/core';
import { Group } from '../Models/group';
import { LastGroupConfig } from '../Models/group-configuration';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {


  createDb() {
    const users = [
      { id: 1, name: 'test' }
    ];
    const groups = [
      { id: 1, listUsers: new Array<User>(), maxUsers: 2 }
    ];
    const config = [
      { numberGroup: 1, numberUsersByGroup: 2, lastGroupCOnfig: LastGroupConfig.None }
    ];
    return {users, groups, config};
  }

  // Overrides the genId method
  genId<T extends User | Group>(myTable: Array<T>): number {
    return myTable.length > 0 ? Math.max(...myTable.map(element => element.id)) + 1 : 205;
  }
}
