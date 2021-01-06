import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrl = "https://api.github.com/"

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}users`);
  }

  getUsersByName(userName: string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}users/${userName}`);
  }

}
