import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService, private routerService: Router) {}

  form = {
    email: '',
    password: '',
  };

  error = '';

  async onSubmit({ valid }: NgForm) {
    if (!valid) {
      return;
    }

    try {
      await this.authService.loginEmail(this.form.email, this.form.password);
      this.routerService.navigate(['/dashboard']);
    } catch (err) {
      this.error = (err as Error).message;
    }
  }
  ngOnInit(): void {}
}
