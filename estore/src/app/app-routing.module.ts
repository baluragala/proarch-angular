import { HomeComponent } from './home/home.component';
import { AddReactiveComponent } from './products/add-reactive/add-reactive.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
