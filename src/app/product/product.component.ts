import { ProductServiceService } from './../../Services/product-service.service';
import { Component } from '@angular/core';
import {DiscountOffers}  from '../SharedClassesAndTypes/Enum';
import {IProduct}  from '../SharedClassesAndTypes/Interface';
import {ICategory}  from '../SharedClassesAndTypes/Interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})

export class ProductComponent {

  constructor(private productService : ProductServiceService,
    private activatedRoute:ActivatedRoute,private router:Router){ }

Discount : DiscountOffers = DiscountOffers["NoDiscount"];
storeName: string = 'EldypHyperMarket';
storeLogo: string = 'assets/Youssef.jpg';
productList: IProduct[] = this.productService.GetAllProducts();
categoryList: ICategory[] = [{Id:1,Name:"MenClothes"},{Id:2,Name:"WomenClothes"}];
clientName: string = '3azezy';
isPurchased: boolean = false ;

Display(table:any){
  table.style.display="none";
}

Toggle(){
  this.isPurchased= !this.isPurchased;
}

renderValues(){
  return this.productList;
}
showProductWithDiscount(discount:DiscountOffers){
  this.router.navigate(['withdiscount'],{relativeTo: this.activatedRoute});
}
showProductWithOutDiscount(discount:DiscountOffers){
  this.router.navigate(['withoutdiscount'],{relativeTo: this.activatedRoute});
}
}
