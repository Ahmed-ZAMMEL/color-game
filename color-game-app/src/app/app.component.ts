import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user/models/user';
import { UserService } from './user/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isConnected: Boolean;
  user: User;

  constructor( private userService: UserService, private router: Router) {
    this.userService.user$.subscribe(
      user => {
       this.user = user;
       this.isConnected = this.user == null ? false : true;
      });
  }
  
  ngOninit() {

  }
}
