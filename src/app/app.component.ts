import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Cliffton';
  constructor(private router : Router){};
  input1 = "";
  input2 = "";
  Operator1="";
  Hasil=0;
  View(){
    this.count();
    this.router.navigate(['/view']);
  }
  getHasil(){
    return this.Hasil;
  }
  Input(x){
    if(this.Operator1==""){
      this.input1+=x;
    }
    else{
      this.input2+=x;
    }
  }
  InputOpr(x){
    this.Operator1=x;
  }
  count(){
    if(this.Operator1 == '*'){
      this.Hasil = parseInt(this.input1) * parseInt(this.input2);
    }
    else if(this.Operator1 == '+'){
      this.Hasil = parseInt(this.input1) + parseInt(this.input2);
    }
    else if(this.Operator1 == '-'){
      this.Hasil = parseInt(this.input1) - parseInt(this.input2);
    }
    else{
      this.Hasil = 0;
    }
    this.input1 = "";
    this.input2 = "";
    this.Operator1="";
  }

}