import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-space.pipe';;
import { RouterModule } from '@angular/router';
import { ProdcutDetailGuard } from './prodcut-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],    
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products',component:ProductListComponent},
      {path:'products/:id',canActivate:[ ProdcutDetailGuard ], component:ProductDetailComponent}
    ])
  ]
})
export class ProductModule { }
