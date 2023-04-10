import { Injectable } from '@angular/core';
import { Observable , catchError , throwError } from 'rxjs';
import { IUser } from './../app/SharedClassesAndTypes/Interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User_Url:string="https://jsonplaceholder.typicode.com/users"
  constructor(private http:HttpClient) { }

  GetUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this.User_Url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Server Error");
    }))
  }
}
