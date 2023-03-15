import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {
  listImage = [
    'https://vietnamitx.com/attachments/top-hinh-nen-dong-wallpaper-engine-desktop-tuyet-dep-download-chon-loc-2021-jpg.2215/',
    'https://cdn.tgdd.vn/Files/2020/06/08/1261696/moi-tai-bo-hinh-nen-asus-rog-2020-moi-nhat_800x450.jpg',
    'https://haycafe.vn/wp-content/uploads/2021/12/Hinh-nen-Full-HD-1080-cho-may-tinh-dep.jpg',
    'https://cdn.dinhvangcomputer.vn/wp-content/uploads/2022/12/0106_hinh-nen-4k-may-tinh14-scaled.jpg'
  ];
 private index =0;

  src = this.listImage[this.index];


  constructor() {
  }

  ngOnInit(): void {
  }

  previous() {
    debugger
    if (this.index > 0) {
      this.index--;
      this.src = this.listImage[this.index];
    }
  }

  next() {
    if (this.index < this.listImage.length - 1) {
      console.log(this.src)
      this.index++;
      this.src = this.listImage[this.index];
    }
  }
}
