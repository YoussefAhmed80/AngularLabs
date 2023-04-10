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
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import { WithDiscountComponent } from './with-discount/with-discount.component';
import { WithOutDiscountComponent } from './with-out-discount/with-out-discount.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    SquarePipe,
    HomeComponent,
    PostComponent,
    UserComponent,
    PageNotFoundComponent,
    CommentComponent,
    WithDiscountComponent,
    WithOutDiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
