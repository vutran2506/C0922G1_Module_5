import {Injectable} from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  iWordList: Iword[] = [
    {
      word: 'Hello',
      mean: 'xin chào'

    },
    {
      word: 'Bye',
      mean: 'Tạm biệt'

    },
    {
      word: 'One',
      mean: 'số một'

    },
    {
      word: 'red',
      mean: 'màu đỏ'

    },
  ]

  constructor() {
  }

  getAllDictionary() {
    return this.iWordList;
  }

  findByWord(word: string) {
    return this.iWordList.filter(item => item.word === word)[0]
  }
}
