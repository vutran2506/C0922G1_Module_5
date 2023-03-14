import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TodoComponent} from "./todo-2/todo/todo.component";
import {TodoEditComponent} from "./todo-2/todo-edit/todo-edit.component";
import {TodoDeleteComponent} from "./todo-2/todo-delete/todo-delete.component";


const routes: Routes = [
  // {
  //   path: 'product',
  //   loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  // },
  // {
  //   path: 'category',
  //   loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  // }
  {
  path: 'todo', component: TodoComponent},
{path: 'todo/edit/:id', component: TodoEditComponent},
{path: 'todo/delete/:id', component: TodoDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
