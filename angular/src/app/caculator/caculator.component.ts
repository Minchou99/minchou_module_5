import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {

  firstNumber: number;
  secondNumber: number;
  result: (number | string);

  constructor() {
  }

  ngOnInit(): void {
  }

  addition() {
    this.result = parseFloat(String(this.firstNumber)) + parseFloat(String(this.secondNumber));
  }

  subtraction() {
    this.result = parseFloat(String(this.firstNumber)) - parseFloat(String(this.secondNumber));
  }

  multiplication() {
    this.result = parseFloat(String(this.firstNumber)) * parseFloat(String(this.secondNumber));
  }

  division() {
    this.result = parseFloat(String(this.firstNumber)) / parseFloat(String(this.secondNumber));
  }

}
