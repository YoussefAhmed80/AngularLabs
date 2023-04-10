import { IProduct } from './SharedClassesAndTypes/Interface';
import { ProductComponent } from './product/product.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'TestAngular';
  @ViewChild(ProductComponent) child! : ProductComponent;
  products! : IProduct[];
  flag:boolean = false;
  ngAfterViewInit() : void{
    this.products= this.child.renderValues();
  }
  callRenderValues():void {
    this.flag=true;
  }
}
