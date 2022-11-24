import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  rfLogin: FormGroup;

  constructor(private _formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.rfLogin = this._formBuilder.group({
      name:[' ',[ Validators.required]],
      password:['123456',[Validators.required,Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if(this.rfLogin.valid){
      console.log(this.rfLogin.value);
    }
  }
}
