import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachListComponent} from "./component/coach-list/coach-list.component";
import {CoachCreateComponent} from "./component/coach-create/coach-create.component";
import {CoachEditComponent} from "./component/coach-edit/coach-edit.component";



const routes: Routes = [
  {
    path: 'coach',
    component:CoachListComponent
  },
  {
    path: 'coach/create',
    component: CoachCreateComponent
  },
  {
    path: 'coach/edit',
    component: CoachEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
