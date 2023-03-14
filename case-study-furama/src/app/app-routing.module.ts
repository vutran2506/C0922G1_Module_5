import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';


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
  },
  {
    path: 'contract/create',
    component: CreateContractComponent
  },
  {
    path: 'facility/create',
    component: CreateFacilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
