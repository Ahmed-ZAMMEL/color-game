import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['name@example.com', Validators.required],
      password: ['password', Validators.required]
    });
  }

  // Getters pour les champs de fomulaire.
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  //Vérifier les identifiants de l'utilisateur pour se connecter.  
  login = () => {
    if (this.loginForm.dirty && this.loginForm.valid) {
      //To do.
    }
  }

}
