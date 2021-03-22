import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Credentials } from '../models/credentials';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  crendential: Credentials;
  credentialError: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['john@doe', [Validators.required, Validators.minLength(6)]],
      password: ['abcde', [Validators.required, Validators.minLength(5)]]
    });
  }

  // Getters pour les champs de fomulaire.
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  //Vérifier les identifiants de l'utilisateur pour se connecter.  
  login = () => {
    console.log('ldqjhdflskghl');
    this.crendential = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    //Appel service.
    this.userService.login(this.crendential).subscribe(
      res => {
        this.router.navigate(['/home/home']);
      },
      err => {
        this.credentialError = true;
        console.log('Error');
      },
      () => {
        // Le block onComplete sert à gérer la logique de desinscription à l'observable.
      }
    )
  }


}
