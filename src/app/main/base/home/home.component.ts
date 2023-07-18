import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userService: UserService, private router: Router){}

  onClick(){
    this.userService.logout()
    .then(res => {
      console.log(res);
      this.router.navigate(['/login']);
      
    })
    .catch(err => console.log(err));
  }
}
