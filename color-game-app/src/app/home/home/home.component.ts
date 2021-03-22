import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../user/models/user';
import { UserService } from '../../user/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isConnected: boolean;

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.isConnected = this.userService.user == null ? false : true;
    })
    
  }

}
