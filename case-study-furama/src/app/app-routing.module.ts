import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'customer',
    component: ListCustomerComponent
  },
  {
    path: 'facility',
    component: ListFacilityComponent
  },
  {
    path: 'contract',
    component: ListContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
