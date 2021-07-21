import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authStatus = this.authService.isAuth;
  }

  ngOnInit(): void {
  }

  onSignIn(): void {
    this.authService.signIn().then(
      () => {
        this.router.navigate(['devices']);
        this.authStatus = this.authService.isAuth;
      }
    );
  }

  onSignOut(): void {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
