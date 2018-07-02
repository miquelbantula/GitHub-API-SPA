import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public message = "w3schools";
  public newUrl = "";


  getUsername(value){
    this.message = value;
    console.log(value);
  }


}
