import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';

const ROUTES:Routes=[
  { path:'view', component : ViewComponent},

]
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,  
    RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, ViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
