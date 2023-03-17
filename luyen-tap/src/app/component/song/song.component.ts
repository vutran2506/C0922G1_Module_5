import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {Song} from '../../model/song';
import {SongService} from '../../service/song.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  songs: Song[] = [];
  categories: Category[] = [];
  temp: Song = {};
  page = 1;
  nameSearch = '';
  cateSearch = 0;


  constructor(private songService: SongService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllSongs();
    this.getAllCategory();
  }

  getAllSongs() {
    this.songService.getAllSong().subscribe(items => {
      this.songs = items;
    });
  }
getAllCategory() {
    this.categoryService.getAllCategory().subscribe(items => {
      this.categories = items;
    });
}
  delete(id: number) {
    if (id != null) {
      this.songService.delete(id).subscribe(next => {
        this.getAllSongs();
        Swal.fire({
          title: 'Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      });
    }
  }

  search() {
    console.log(this.nameSearch);
    console.log(this.cateSearch);
    if (this.cateSearch < 1) {
      this.songService.findByName(this.nameSearch).subscribe(items => {
        this.songs = items;
        this.page = 1;
      });
    } else {
      this.songService.findByNameAndByCategoryId(this.nameSearch, this.cateSearch).subscribe(items => {
        this.songs = items;
        this.page = 1;
      });
    }
  }
}
