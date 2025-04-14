import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loading: boolean = false;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private router: Router,private authService: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.invalid) {
      //this.errorMessage = 'Please correct the errors in the form.';
      return;
    }

      this.loading = true;
      this.errorMessage = null;

      const { username, password } = this.loginForm.value
    console.log(username,password,'zzzzzzz')
    this.router.navigate(["/dashboard"])
      this.authService.login(username, password).subscribe({
        next: () => {
          console.log('saaaaaaa')
          this.router.navigate(["/dashboard"])
        },
        error: (error:any) => {
          this.errorMessage = "Invalid email or password"
          this.loading = false
        },
        complete: () => {
          this.loading = false
        },
      })
  }
}
