import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss']
})
export class UserReposComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: any;
  userName: string;

  ngOnInit() {

  }

  getUsers(){
    this.userService.getUsersByName(this.userName).subscribe((res: User[]) => {
      this.users = res;
      console.log(this.users);
    })
  }

}
