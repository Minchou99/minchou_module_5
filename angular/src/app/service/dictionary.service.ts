import { Injectable } from '@angular/core';
import {IWord} from "../interface/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private _words : IWord [] = [
    {word: "apple",mean:"quả táo"},
    {word:"pen", mean:"Bút"},
    {word:"book", mean:"Sách"},
  ]
  constructor() { }

  get words(): IWord[] {
    return this._words;
  }

  set words(value: IWord[]) {
    this._words = value;
  }
  getAll(){
    return this._words;
  }
  getMeanWordByIndex(index:number){
    return this._words[index];
  }
}
