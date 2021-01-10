import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './interface/user';
import { retry, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //Pagination
  
  private usersUrl = 'http://localhost:8080/api/users';  // URL to web api

  constructor( private http:HttpClient) { }

  getUsers(): Observable<User>{
   
    return this.http.get<User>(this.usersUrl);
  }

// AddUser
  addUsers(user: User): Observable<any> {
    
    return this.http.post<any>(this.usersUrl, user,httpOptions);
  }
  //Détail USER By ID
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }
  // Supprimer User
  delete(user: User | number): Observable<User>  {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, httpOptions);
  }
  // Supprimer All User
  deleteAll(): Observable<any> {
    
    //const url = `${}/${id}`;
    return this.http.delete<any>(this.usersUrl, httpOptions);
  }

  // Supprimer All User
  deleteUserId(id: number) {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }
 
  //Modifier User
  updateUser(user:User): Observable<any>{
    return this.http.put<any>(this.usersUrl, user,httpOptions);

  }

  //Recherche Par nom
  Recherche(nom): Observable<User>{
    const url = `${this.usersUrl}/${nom}`;
    return this.http.get<User>(url);
  }
}

