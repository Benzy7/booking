import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private hotelService : HotelsService
  ) { }

  reservation = {
    date_arrive: new Date(),
    date_depart: new Date(),
    phone: "",
    nb_persons: 1,
    nb_rooms: 1,
    user_id: 1,
    rooms_ids: []
  }

  hotelSelected
  hotels
  rooms

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe( res => {
      this.hotels = res
      console.log(res)
    }, err => {
      this.hotels = []
      console.log(err)
    })
  }

  book(){
    console.log(this.reservation)
  }

  getRooms(){
    let param = '?hotel='+this.hotelSelected

    this.hotelService.getRooms(param).subscribe( res => {
      this.rooms = res
    }, err => {
      this.rooms = []
      console.log(err)
    })
  }
}
