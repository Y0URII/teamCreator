import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})

/**
 * User Service
 */
export class UserService {

  //#region Fields

    /**
   * URL to web api
   */
     private userUrl = 'api/users';

     /**
      * http options
      */
     private httpOptions = {
       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     };

  /**
   * List of users online
   */
  userList: Array<User> = new Array<User>();

  //#endregion

  /**
   * Constructor
   */
  constructor(private http: HttpClient) {
    // This is intentional
  }

  //#region Public Method

    /**
   * Get Group Configuration
   * @returns GroupConfiguration
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
                    .pipe(
                      catchError(this.handleError<User[]>('getConfig'))
                    );
  }

  /**
   * Add user
   * @param user 
   */
  public addUser(user: User) {
    if (this.isUserUnique(user.name)) {
      this.userList.push(user);
    }
  }

  /**
   * Remove user in list
   * @param user 
   */
  public removeUser(user: User) {
    this.userList.splice(this.userList.findIndex(u => u == user));
  }

  /**
   * Check username is unique
   * @param name 
   * @returns boolean
   */
  public isUserUnique(name: string) {
    return this.userList.every(user => user.name != name);
  }

  public setGroupToUser(user: User, groupId: number) {
    let index = this.userList.findIndex(u => u == user);
    if (index != -1) {
      this.userList[index].groupId = groupId;
    }
  }

  /**
   * Get user by name
   * @param id user.name
   * @returns user
   */
  public getUserbyName(name: string) {
    return this.userList.find(user => user.name == name);
  }

  //#endregion

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
