import { UserService } from './../../Services/user.service';
import { IUser } from './../SharedClassesAndTypes/Interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  users!:IUser[];
  ErrorMessage:any;
  constructor(private userService : UserService){  }

  ngOnInit(): void{
    this.userService.GetUsers().subscribe({
      next:(data:IUser[])=>{this.users=data},
      error:(err:any)=>{this.ErrorMessage=err}
    }
    );
  }
}
