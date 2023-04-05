import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct }  from '../SharedClassesAndTypes/Interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {
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
  @Output() childEvent = new EventEmitter();

  GetData(){
    this.childEvent.emit(this.productList);
  }
  SayWelcom(){
    console.log("Welcom Parent I'm Child");
  }
}
