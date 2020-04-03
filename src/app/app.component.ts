import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lesens = ['Розробка мобільних додатків ', 'ООП Java', 'Програмно-апаратне забезпечення вбудованих систем'];
 scores1:number; scores2:number; scores3:number;
modulus1:number; modulus2:number; modulus3:number;
result;
evalRating() {
this.result=(this.scores1*this.modulus1)+(this.scores2*this.modulus2)+(this.scores3*this.modulus3);
return this.result;
}


startClick1():void{
   this.scores1=0;
   this.modulus1=0;
  };startClick2():void{
   this.scores2=0;
   this.modulus2=0;
  };startClick3():void{
   this.scores3=0;
   this.modulus3=0;
  };
   
}
