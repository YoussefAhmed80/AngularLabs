import { Observable , catchError , throwError } from 'rxjs';
import { IPost } from './../app/SharedClassesAndTypes/Interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  Post_Url:string="https://jsonplaceholder.typicode.com/posts"

  constructor(private http:HttpClient) { }

  GetPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(this.Post_Url).pipe(catchError((err)=>{
      return throwError(()=>err.message || "Server Error");
    }))
  }
}
