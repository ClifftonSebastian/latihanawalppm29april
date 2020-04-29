import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(
    private appComponent: AppComponent
  ) { }
  Hasil=0;
  ngOnInit() {
    this.Hasil = this.appComponent.getHasil();
  }

}