import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { FeatureComponent } from './feature/feature.component';
import { UnitsPipe } from './units.pipe';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddReactiveComponent } from './add-reactive/add-reactive.component'
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [ProductListComponent, ProductListItemComponent, FeatureComponent, UnitsPipe, AddComponent, AddReactiveComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'list', component: ProductListComponent },
      { path: 'add', component: AddReactiveComponent },
      { path: 'detail/:id', component: ProductDetailComponent }
    ])
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }

