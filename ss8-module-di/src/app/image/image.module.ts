import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRoutingModule } from './image-routing.module';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImgSlideComponent } from './img-slider/img-slide/img-slide.component';


@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],

  imports: [
    CommonModule,
    ImageRoutingModule,
  ]
})
export class ImageModule { }
