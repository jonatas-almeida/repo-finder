import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://api.github.com/"
  query = "?q=followers%3A%3E%3D1000&ref=searchresults&s=followers&type=Users"

  constructor(private http: HttpClient) { }

  //Pega todos os usuários que estão em alta no GitHub
  getAllUsers():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}search/users${this.query}`)
  }

  //Busca o usuário pelo nome de usuário do GitHub
  getUsersByName(userName: string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}users/${userName}`);

  }

}
