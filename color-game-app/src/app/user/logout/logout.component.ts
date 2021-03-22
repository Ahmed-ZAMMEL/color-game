import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  logoutError: boolean = false;
  loading: boolean = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  logout = () => {
    this.loading = true;
    //Appel service.
    this.userService.logout().subscribe(
      res => {
        this.router.navigate(['/']);
      },
      err => {
        this.logoutError = true;
      },
      () => {
        this.loading = false;
        // Le block onComplete sert à gérer la logique de desinscription à l'observable.
      }
    )
  }
}
