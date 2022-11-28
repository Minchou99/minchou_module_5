import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CaculatorComponent} from './caculator/caculator.component';
import {ColorPikerComponent} from './color-piker/color-piker.component';
import {DemoComponent} from './demo/demo.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {InputComponent} from './input/input.component';
import {RegisterComponent} from './register/register.component';
import {ProductManagementComponent} from './product-management/product-management.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: 'product/list',
    component: ProductListComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  }, {
    path: 'product/edit/:id',
    component: ProductEditComponent
  }, {
    path: 'product/delete/:id',
    component: ProductDeleteComponent
  }
//   {
//     path: 'dictionary/home',
//     component: DictionaryPageComponent
//   }, {
//     path: 'dictionary/detail/:index',
//     component: DictionaryDetailComponent
//   }
];

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
    ProductManagementComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent,
    CategoryListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
