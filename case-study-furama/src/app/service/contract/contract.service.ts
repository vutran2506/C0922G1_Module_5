import { Injectable } from '@angular/core';
import {Contract} from '../../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts: Contract[] = [
    {
      id: 2,
      startDay: '2020-07-14',
      endDay: '2020-07-21',
      cost: 200000,

      customer: {
        id: 3,
        name: 'Trương Đình Nghệ'
      },
      facility: {
        id: 1,
        name: 'Villa Beach Front'
      }
    },
    {
      id: 3,
      startDay: '2021-03-15',
      endDay: '2021-03-17',
      cost: 50000,

      customer: {
        id: 4,
        name: 'Dương Văn Quan'
      },
      facility: {
        id: 2,
        name: 'House Princess 01'
      }
    },
    {
      id: 4,
      startDay: '2021-01-14',
      endDay: '2021-01-18',
      cost: 100000,
      customer: {
        id: 5,
        name: 'Hoàng Trần Nhi Nhi'
      },
      facility: {
        id: 5,
        name: 'House Princess 02'
      }
    },
    {
      id: 5,
      startDay: '2021-07-14',
      endDay: '2021-07-15',
      cost: 0,

      customer: {
        id: 2,
        name: 'Phạm Xuân Diệu'
      },
      facility: {
        id: 6,
        name: 'Room Twin 02'
      }
    },
  ];
  constructor() { }
  getAllContract(){
    return this.contracts;
  }
}
