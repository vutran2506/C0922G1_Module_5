import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilitys: Facility[] = [{
    id: 2,
    name: 'House Princess 01',
    area: '14000',
    cost: '5000000',
    image: 'https://images.squarespace-cdn.com/content/v1/5aadf482aa49a1d810879b88/1626698419120-J7CH9BPMB2YI728SLFPN/1.jpg',
    maxPeople: 7,
    standard: 'vip',
    description: 'Có thêm bếp nướng',
    poolArea: 'null',
    floor: 3,
    facilityFree: 'null',
    rentType: {
      id: 3,
      name: 'day'
    },
    facilityType: {
      id: 2,
      name: 'House'
    }
  },
    {
      id: 5,
      name: 'House Princess 02',
      area: '10000',
      cost: '4000000',
      image: 'https://kconceptvn.com/wp-content/uploads/2020/04/hotel-photography-chup-anh-khach-san-resortNovotel-phu-quoc-resort-02.jpg',
      maxPeople: 5,
      standard: 'normal',
      description: 'Có thêm bếp nướng',
      poolArea: 'null',
      floor: 2,
      facilityFree: 'null',
      rentType: {
        id: 3,
        name: 'day'
      },
      facilityType: {
        id: 2,
        name: 'House'
      }
    },
    {
      id: 4,
      name: 'Villa No Beach Front',
      area: '22000',
      cost: '9000000',
      image: 'https://pistachiohotel.com/UploadFile/Gallery/Overview/a3.jpg',
      maxPeople: 8,
      standard: 'normal',
      description: 'Có hồ bơi',
      poolArea: '300',
      floor: 3,
      facilityFree: 'null',
      rentType: {
        id: 3,
        name: 'day'
      },
      facilityType: {
        id: 1,
        name: 'Villa'
      }
    },
    {
      id: 6,
      name: 'Room Twin 02',
      area: '3000',
      cost: '900000',
      image: 'https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg',
      maxPeople: 2,
      standard: 'normal',
      description: 'Có tivi',
      poolArea: 'null',
      floor: 0,
      facilityFree: '1 Xe máy',
      rentType: {
        id: 4,
        name: 'hour'
      },
      facilityType: {
        id: 3,
        name: 'Room'
      }
    }
    ,
    {
      id: 7,
      name: 'Room Twin 03',
      area: '300',
      cost: '90000',
      image: 'https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg',
      maxPeople: 2,
      standard: 'normal',
      description: 'Có tivi',
      poolArea: 'null',
      floor: 0,
      facilityFree: '1 Xe máy',
      rentType: {
        id: 4,
        name: 'day'
      },
      facilityType: {
        id: 3,
        name: 'Room'
      }
    }

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
