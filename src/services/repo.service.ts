import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  baseUrl = "https://api.github.com/"

  constructor(private http: HttpClient) { }


  getUsersRepo(userNameRepo: string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}users/${userNameRepo}/repos`);
  }
}
