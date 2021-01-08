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

  //Ag Grid
  columnDefs = [
    {field: 'name'},
    {field: 'Repo'},
    {field: 'Forks'}
  ]

  ngOnInit() {
  }

  getUsers(){
    //Get Users
    this.userService.getUsersByName(this.userName).subscribe(res => {
      this.users = res;
    });

    //Get Repos
    this.repoService.getUsersRepo(this.userName).subscribe(res => {
      this.repos = res;
      console.log(res)
    });
  }

}
