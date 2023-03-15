import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {TodoService} from "../service/todo.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {
  todoFormDelete: FormGroup;
  id1: number;
  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id1 = +paramMap.get('id');
      this.todoService.findById(this.id1).subscribe(todo => {
        this.todoFormDelete = new FormGroup({
          id: new FormControl(todo.id),
          content: new FormControl(todo.content),
          complete: new FormControl(todo.complete)
        });
      });
    });
  }
  deleteTodo() {
    this.todoService.delete(this.id1).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }
}
