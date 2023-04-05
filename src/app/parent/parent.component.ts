import { ChildComponent } from './../child/child.component';
import { Component, ViewChild } from '@angular/core';
import { IProduct }  from '../SharedClassesAndTypes/Interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent {
  messageFromChild!: IProduct[];
  @ViewChild(ChildComponent) child!: ChildComponent;

  ngAfterViewInit() {
    this.child!.SayWelcom();
  }
}

