import { EnrollService } from './../../Services/enroll.service';
import { User } from '../Classes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  topics=["facebook","twitter" , "google"];
  userModel=new User("","","","","");
  constructor(private enrollService:EnrollService) { }

  submitData()
  {
    //component ===> service
    //service==>http call
    this.enrollService.enroll(this.userModel).subscribe({
      next:(data)=>{console.log(data);},
      error:(err)=>{console.log(err);}
    });
  }
}
