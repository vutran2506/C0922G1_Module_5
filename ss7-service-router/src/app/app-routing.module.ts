import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {TimelinesComponent} from "./timelines/timelines.component";
// import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
// import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {ProductManagementComponent} from "./product_management/product-management/product-management.component";
import {CreateProductComponent} from "./product_management/create-product/create-product.component";
// import {DictionaryPageComponent} from "./dictionary/dictionary-page/dictionary-page.component";
// import {TranslateComponent} from "./dictionary/translate/translate.component";
import {EditProductComponent} from "./product_management/edit-product/edit-product.component";
import {DeleteProductComponent} from "./product_management/delete-product/delete-product.component";


const routes: Routes = [
  // {
  //   path: 'timelines',
  //   component: TimelinesComponent
  // }
  // {
  //   path: 'youtube',
  //   component: YoutubePlaylistComponent,
  //   children: [{
  //     path: ':id',
  //     component: YoutubePlayerComponent
  //   }]
  // }
  {
    path: 'product/list',
    component: ProductManagementComponent
  },
  {
    path:'product/create',
    component: CreateProductComponent
  },
  {path: 'product/update/:id',
    component: EditProductComponent
  },
  {
    path:'product/delete/:id',
    component: DeleteProductComponent
  }



  // {
  //   path: 'dictionary/list',
  //   component: DictionaryPageComponent
  // },
  // {
  //   path: 'dictionary/translate/:word',
  //   component: TranslateComponent
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
