import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lesens = ['Програмування мобільних додатків ', 'Схемотехніка', 'OC'];
 balls1:number; balls2:number; balls3:number;
coff1:number; coff2:number; coff3:number;
result;
evalRating() {
this.result=(this.balls1*this.coff1)+(this.balls2*this.coff2)+(this.balls3*this.coff3);
return this.result;
}


startClick1():void{
   this.balls1=0;
   this.coff1=0;
  };startClick2():void{
   this.balls2=0;
   this.coff2=0;
  };startClick3():void{
   this.balls3=0;
   this.coff3=0;
  };
   
}
