import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
              private auth: AuthService, 
              public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.authenticate();
    this.router.navigate(['home']);
  }

}
