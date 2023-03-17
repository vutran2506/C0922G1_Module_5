import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SongComponent} from './component/song/song.component';
import {CreateSongComponent} from './component/create-song/create-song.component';
import {EditSongComponent} from './component/edit-song/edit-song.component';


const routes: Routes = [
  {
    path: 'song', component: SongComponent
  },
  {
    path: 'song/create', component: CreateSongComponent
  },
  {
    path: 'song/edit/:id', component: EditSongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
