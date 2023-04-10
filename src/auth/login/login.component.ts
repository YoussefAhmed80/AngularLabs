import { LoginService } from './../../Services/login.service';
import { User } from './../Classes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  userModel=new User("","","","","");
  id:number=1;
  constructor(private loginser:LoginService){}
  submitData(){
    this.loginser.getPostById(this.id).subscribe({
      next:(data)=>{console.log(data);},
      error:(err)=>{console.log(err);}
    });
  }
}
