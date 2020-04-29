import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(
    private appComponent: AppComponent,
    private router : Router
  ) { }
  Hasil=0;
  ngOnInit() {
    this.Hasil = this.appComponent.getHasil();
  }
  Back(){
    this.router.navigate(['../']);
  }

}