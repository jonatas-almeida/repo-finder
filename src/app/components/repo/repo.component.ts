import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RepoService } from 'src/services/repo.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  constructor(private repoService: RepoService, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.getAllRepos();
  }

  ranking: any = [];
  userNameRepo: string;

  getAllRepos(){
    this.userService.getAllUsers().subscribe(response => {
      this.ranking = response;
      console.log(response);
    })
  }

}
