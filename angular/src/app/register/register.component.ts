import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export const reConfirmPass: ValidatorFn = (control: AbstractControl) : ValidationErrors | null =>{
  const passWord = control.get("password");
  const confirmPassword = control.get("confirmPassword");
    if(passWord && confirmPassword && passWord.touched && passWord.value != confirmPassword.value){
      return {"reConfirmPass":true}
  } else{
      return null;
    }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
rfRegister: FormGroup;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.rfRegister = this._formBuilder.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(6),Validators.required]],
      confirmPassword:['',[Validators.minLength(6),Validators.required]],
      country:['',[Validators.required]],
      age:['',[Validators.required,Validators.max(18)]],
      gender:[],
      phone:[[Validators.required,Validators.pattern("^\\+84\\d{9,10}$")]]
    },{validators: reConfirmPass})
  }

  onSubmit() {
    if(this.rfRegister.valid){
      console.log(this.rfRegister.value);
    }
  }

  countryList: country[] = [
    new country("1", "Nga"),
    new country("2", "Mỹ"),
    new country("3", "Nhật")
  ]
}

export class country{
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
