import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {Song} from '../../model/song';
import {SongService} from '../../service/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

songs: Song[] = [];
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getAllSongs()
  }
getAllSongs() {
    this.songService.getAllSong().subscribe(items => {
      this.songs = items;;
    });
}
}
