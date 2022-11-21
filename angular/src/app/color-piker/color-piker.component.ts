import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-piker',
  templateUrl: './color-piker.component.html',
  styleUrls: ['./color-piker.component.css']
})
export class ColorPikerComponent implements OnInit {
  red: string = '#FF0000';
  blue: string = '#0000FF';
  yellow: string = '#FFFF00';
  color = 'red';

  constructor() {
  }

  ngOnInit(): void {
  }

  change(s: string) {
    this.color = s;
  }

}
