import { Observable, catchError, throwError } from 'rxjs';
import { User } from './../auth/Classes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url:string="http://localhost:3000/enroll";

  constructor(private http : HttpClient) { }
  getPostById(id: number): Observable<User> {
    const url = `${this._url}/${id}`;
    return this.http.get<User>(url).pipe(
      catchError((err) => {
        return throwError(() => err.message || "Server Error");
      })
      //return throwError((err:Error)=>err.message || "Server Error");
    );
  }
}
