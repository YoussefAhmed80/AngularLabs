import { Router } from '@angular/router';
import { PostService } from './../../Services/post.service';
import { IPost } from './../SharedClassesAndTypes/Interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
  posts!:IPost[];
  ErrorMessage:any;
  constructor(private postService:PostService,private router: Router){  }
  ngOnInit(){
    this.postService.GetPosts().subscribe({
      next:(data:IPost[])=>{this.posts=data},
      error:(err:any)=>{this.ErrorMessage=err}
    });
  }

  showComments(id:number){
    this.router.navigate(['/comment',id]);
  }
}
