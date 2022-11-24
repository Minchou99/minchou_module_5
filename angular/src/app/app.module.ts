import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { ColorPikerComponent } from './color-piker/color-piker.component';
import { DemoComponent } from './demo/demo.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { InputComponent } from './input/input.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent,
    ColorPikerComponent,
    DemoComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    InputComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
