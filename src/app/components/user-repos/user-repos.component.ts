import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { RepoService } from 'src/services/repo.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {

  constructor(private userService: UserService, private repoService: RepoService, private http: HttpClient) { }

  users: any = [];
  repos: any = [];
  rowData: any = [];
  userName: string;


  ngOnInit() {
    this.getUserOnReload();
  }

  getUsers(){
    //Get Users
    this.userService.getUsersByName(this.userName).subscribe(res => {
      this.users = res;
      localStorage.setItem('user', this.users.login);
    }, error =>
      alert(`Não foi possível achar o usuário`)
    );

    //Get Repos
    this.repoService.getUsersRepo(this.userName).subscribe(res => {
      this.repos = res;
      console.log(res)
    });
  }

  //Mantém as informações do usuário salvas quando recarrega a página
  getUserOnReload(){
    //Se existir algum usuário no Local Storage ele puxa as informações de volta
    if(this.userName = localStorage.getItem('user')){
      this.getUsers();
    }
    //Se não existir, ele não puxa nenhuma informção
    else{
      return null;
    }
  }


    recent(){
    this.repos.sort(function(a, b) {
      if(a.created_at < b.created_at){
        return 1;
      }
      if(b.created_at < a.created_at){
        return -1;
      }
      return 0;
    })
  }


  olderRepo(){
    this.repos.sort(function(a, b) {
      if(a.created_at > b.created_at){
        return 1;
      }
      if(b.created_at > a.created_at){
        return -1;
      }
      return 0;
    })
  }


}
