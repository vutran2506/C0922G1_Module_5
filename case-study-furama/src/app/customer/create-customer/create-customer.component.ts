import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
@Output() onCreate = new EventEmitter<Customer>();
  rfCreateCustomer: FormGroup;
  customerTypes: CustomerType[] = [{
    id: 1,
    name: 'Diamond'
  },
    {
      id: 2,
      name: 'Platinium'
    },
    {
      id: 3,
      name: 'Gold'
    },
    {
      id: 4,
      name: 'Silver'
    },
    {
      id: 5,
      name: 'Member'
    }];

  constructor() { }

  ngOnInit(): void {
    this.rfCreateCustomer = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dateOfBirth: new FormControl(),
      gender: new FormControl(),
      iCard: new FormControl(),
      phoneNumber: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl()
    });
  }

  createCustomer() {
    debugger
    this.onCreate.emit(this.rfCreateCustomer.value);
  }
}
