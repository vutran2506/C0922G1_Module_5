import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SongService} from '../../service/song.service';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  categories: Category[] = [];
  formSong: FormGroup;

  constructor(private songService: SongService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formSong = new FormGroup({
      name: new FormControl('', [Validators.required]),
      singer: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      category: new FormControl(null, [Validators.required])
    });
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(items => {
      this.categories = items;
    });
  }

  submit() {
    const song = this.formSong.value;
    this.songService.save(song).subscribe(() => {
      this.formSong.reset();
      Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.router.navigate(['/song']);

    });
  }
}
