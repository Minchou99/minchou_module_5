import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaculatorComponent } from './caculator/caculator.component';
import { ColorPikerComponent } from './color-piker/color-piker.component';
import { DemoComponent } from './demo/demo.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import {FormsModule} from '@angular/forms';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent,
    ColorPikerComponent,
    DemoComponent,
    RatingBarComponent,
    CountdownTimerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
