import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SquarePipe } from './square.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    SquarePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
