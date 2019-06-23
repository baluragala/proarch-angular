import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { FeatureComponent } from './feature/feature.component';
import { UnitsPipe } from './units.pipe';
import { AddComponent } from './add/add.component';
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [ProductListComponent, ProductListItemComponent, FeatureComponent, UnitsPipe, AddComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }

