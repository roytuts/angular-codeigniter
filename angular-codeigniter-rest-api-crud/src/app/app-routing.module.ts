import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
	{ path: '', redirectTo: '/products', pathMatch: 'full' },
	{ path: 'products', component: ProductListComponent },
	{ path: 'product/:id/detail', component: ProductDetailComponent },
	{ path: 'product/:id/update', component: ProductEditComponent },
	{ path: 'product/add', component: ProductAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
