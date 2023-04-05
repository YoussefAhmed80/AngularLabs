import { Component } from '@angular/core';
import {DiscountOffers}  from '../SharedClassesAndTypes/Enum';
import {IProduct}  from '../SharedClassesAndTypes/Interface';
import {ICategory}  from '../SharedClassesAndTypes/Interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
Discount : DiscountOffers = DiscountOffers["NoDiscount"];
storeName: string = 'EldypHyperMarket';
storeLogo: string = 'assets/Youssef.jpg';
productList: IProduct[] = [
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
];
categoryList: ICategory[] = [{Id:1,Name:"MenClothes"},{Id:2,Name:"WomenClothes"}];
clientName: string = '3azezy';
isPurchased: boolean = false ;

Display(table:any){
  table.style.display="none";
}
Toggle(){
  this.isPurchased= !this.isPurchased;
}
}
