import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  booking = {
    arrivalDate: new Date(),
    checkoutDate: new Date(),
    adultsNb: 1,
    childsNb: 1,
    roomsNb: 1
  }

  ngOnInit(): void {
  }

  book(){
    console.log(this.booking)
  }
}
