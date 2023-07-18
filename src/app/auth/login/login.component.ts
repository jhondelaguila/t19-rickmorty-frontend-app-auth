import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLog: FormGroup;

  constructor(private userService: UserService, private router: Router){
    this.formLog = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  onSubmit(){
    this.userService.login(this.formLog.value)
    .then(res => {
      console.log(res);
      this.router.navigate(['/home']);
    })
    .catch(err => console.log(err));
  }

  onClick(){
    this.userService.loginWithGoogle()
    .then(res => {
      console.log(res);
      this.router.navigate(['home']);
    })
    .catch(err => console.log(err));
  }
}
