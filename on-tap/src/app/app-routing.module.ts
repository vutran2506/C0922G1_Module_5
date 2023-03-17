import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BoolListComponent} from './component/bool-list/bool-list.component';
import {BookCreateComponent} from './component/book-create/book-create.component';
import {BookEditComponent} from './component/book-edit/book-edit.component';


const routes: Routes = [
  {
    path: 'book',
    component: BoolListComponent
  },
  {
    path: 'book/create',
    component: BookCreateComponent
  },
  {
    path: 'book/edit/:id',
    component: BookEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
