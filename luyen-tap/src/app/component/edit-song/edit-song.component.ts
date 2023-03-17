import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SongService} from '../../service/song.service';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../model/category';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  formEdit: FormGroup;
  id: number;
  categories: Category[] = [];

  constructor(private songService: SongService,
              private categoryService: CategoryService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getSong(this.id);
    });
  }



  getSong(id: number) {
   this.songService.findById(id).subscribe(item => {
      this.categoryService.getAllCategory().subscribe(items => {
        this.categories = items;
        this.formEdit = new FormGroup({
          id: new FormControl(item.id),
          name: new FormControl(item.name, [Validators.required]),
          singer: new FormControl(item.singer, [Validators.required]),
          date: new FormControl(item.date, [Validators.required]),
          category: new FormControl(items.find(x => x.id === item.category.id), [Validators.required]),
        });
      });
    });
  }

  updateProduct(id: number) {
    const song = this.formEdit.value;
    this.songService.update(id, song).subscribe(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      this.route.navigate(['/song']);
    });
  }
}
