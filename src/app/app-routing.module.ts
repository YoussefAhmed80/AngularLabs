import { WithDiscountComponent } from './with-discount/with-discount.component';
import { CommentComponent } from './comment/comment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithOutDiscountComponent } from './with-out-discount/with-out-discount.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'product', component: ProductComponent},
  {path: 'user', component: UserComponent},
  {path: 'post', component: PostComponent},
  {path:'home', component: HomeComponent},
  {path:'posts/:id/comment',component:CommentComponent},
  {
    path:'product',
    component:ProductComponent,
    children: [
      {path:'withdiscount', component: WithDiscountComponent},
      {path:'withoutdiscount', component:WithOutDiscountComponent}
    ]
  },
  {path:'auth',loadChildren:()=>import("../auth/auth.module").then(m=>m.AuthModule)},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
