import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/models/Repo';
import { RepoService } from 'src/services/repo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  constructor(private repoService: RepoService, private http: HttpClient) { }

  ngOnInit() {
  }

  repos: Repo[];
  userNameRepo: string;

  getRepo(){
    this.repoService.getUsersRepo(this.userNameRepo).subscribe((response) => {
      this.repos = response;
      console.log(response);
    })
  }

}
