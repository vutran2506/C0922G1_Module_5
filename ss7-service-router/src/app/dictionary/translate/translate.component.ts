import { Component, OnInit } from '@angular/core';
import {Iword} from "../../model/iword";
import {DictionaryServiceService} from "../../service/dictionary-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
iWord: Iword;
  constructor(private dictionary:DictionaryServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const word = paramMap.get('word')
      this.iWord = this.dictionary.findByWord(word);
    })
  }

}
