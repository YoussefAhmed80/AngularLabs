import { IProduct, IUser, IPost } from './../app/SharedClassesAndTypes/Interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  products!: IProduct[];
  User_Url:string="https://jsonplaceholder.typicode.com/users"
  Post_Url:string="https://jsonplaceholder.typicode.com/posts"
  constructor() { }

  ngONInit():void{
    this.products= this.GetAllProducts();
  }
  GetAllProducts(){
    return [
      {
        ID: 1,
        Name: "Shetos",
        Quantity: 3,
        Price: 5,
        Img : "assets/Youssef.jpg"
      },
      {
        ID: 2,
        Name: "Doritos",
        Quantity: 3,
        Price: 5,
        Img : "assets/Youssef.jpg"
      }
    ]
  }

  GetProductById(prdId:any){
    if(isNaN(prdId)){
      return null;
    }
    for(let prd of this.products){
      if(prd.ID == prdId){
        return prd;
      }
    }
    return null;
  }
}
