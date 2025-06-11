import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { KENDO_INPUTS } from "@progress/kendo-angular-inputs";
import { KENDO_LABEL } from "@progress/kendo-angular-label";
import { CheckBoxModule } from '@progress/kendo-angular-inputs';
import { KENDO_DATEINPUTS } from '@progress/kendo-angular-dateinputs';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, KENDO_INPUTS, KENDO_BUTTONS, KENDO_LABEL],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loading: boolean = false;
  errorMessage: string | null = null
  public form: FormGroup;

  public data = {
    ssoid: "",
    password: "",
  };

  constructor(private router: Router,private authService: AuthService) {
    this.form = new FormGroup({
      ssoid: new FormControl(this.data.ssoid, [Validators.required]),
      password: new FormControl(this.data.password, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  public submitForm(): void {
    const { ssoid, password } = this.form.value
    console.log(ssoid,password,'zzzzzzz')
    this.router.navigate(["/dashboard"])
      this.authService.login(ssoid, password).subscribe({
        next: () => {
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
