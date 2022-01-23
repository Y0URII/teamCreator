import { Injectable } from '@angular/core';
import { Group } from '../Models/group';
import { GroupConfiguration } from '../Models/group-configuration';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    const users: User[] = [];
    const groups: Group[] = [];
    const config: GroupConfiguration[] = [];
    return {users, groups, config};
  }

  // Overrides the genId method
  genId<T extends User | Group>(myTable: Array<T>): number {
    return myTable.length > 0 ? Math.max(...myTable.map(element => element.id)) + 1 : 205;
  }
}
