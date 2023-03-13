import {Component, OnInit} from '@angular/core';
import {DictionaryServiceService} from "../../service/dictionary-service.service";
import {Iword} from "../../model/iword";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  iWordList: Iword[] = [];

  constructor(private dictionary: DictionaryServiceService) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.iWordList = this.dictionary.getAllDictionary()
  }

}
