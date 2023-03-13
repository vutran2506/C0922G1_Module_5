import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})

export class ListCustomerComponent implements OnInit {

  customers: Customer[] = [
    {
      id: 1,
      name: 'Nguyễn Thị Hào',
      dateOfBirth: '1970-11-07',
      gender: true,
      iCard: '643431213',
      phoneNumber: '0945423362',
      email: 'thihao07@gmail.com',
      address: '23 Nguyễn Hoàng, Đà Nẵng',
      customerType: {
        id: 4,
        name: 'Silver'
      }
    },
    {
      id: 2,
      name: 'Phạm Xuân Diệu',
      dateOfBirth: '1992-08-08',
      gender: true,
      iCard: '865342123',
      phoneNumber: '0954333333',
      email: 'xuandieu92@gmail.com',
      address: 'K77/22 Thái Phiên, Quảng Trị',
      customerType: {
        id: 3,
        name: 'Gold'
      }
    },
    {
      id: 3,
      name: 'Trương Đình Nghệ',
      dateOfBirth: '1990-02-27',
      gender: true,
      iCard: '488645199',
      phoneNumber: '0373213122',
      email: 'nghenhan2702@gmail.com',
      address: 'K323/12 Ông Ích Khiêm, Vinh',
      customerType: {
        id: 1,
        name: 'Diamond'
      }
    },
    {
      id: 4,
      name: 'Dương Văn Quan',
      dateOfBirth: '1981-07-08',
      gender: true ,
      iCard: '543432111',
      phoneNumber: '0490039241',
      email: 'duongquan@gmail.com',
      address: 'K453/12 Lê Lợi, Đà Nẵng',
      customerType: {
        id: 1,
        name: 'Diamond'
      }
    },
    {
      id: 5,
      name: 'Hoàng Trần Nhi Nhi',
      dateOfBirth: '1995-12-09',
      gender: false,
      iCard: '795453345',
      phoneNumber: '0312345678',
      email: 'nhinhi123@gmail.com',
      address: '224 Lý Thái Tổ, Gia Lai',
      customerType: {
        id: 4,
        name: 'Silver'
      }
    },
    {
      id: 6,
      name: 'Tôn Nữ Mộc Châu',
      dateOfBirth: '2005-12-06',
      gender: false,
      iCard: '732434215',
      phoneNumber: '0988888844',
      email: 'tonnuchau@gmail.com',
      address: '37 Yên Thế, Đà Nẵng',
      customerType: {
        id: 4,
        name: 'Silver'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  saveCustomer($event: Customer) {
debugger
    this.customers.push({...$event

    });
  }
}
