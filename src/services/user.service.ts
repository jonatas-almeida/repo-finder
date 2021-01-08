import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://api.github.com/"

  constructor(private http: HttpClient) { }

  getUsersByName(userName: string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}users/${userName}`);

  }

}
