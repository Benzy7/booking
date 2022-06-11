import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HotelsService } from 'src/app/services/hotels.service';


@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrls: ['./rooms-page.component.css']
})
export class RoomsPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private hotelsService: HotelsService
  ) { }

  hotelId
  rooms

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.hotelId = params['hotel']
    });
    this.getRooms()
  }

  getRooms(){
    let param = ''
    if(this.hotelId){
      param = '?hotel='+this.hotelId
    }
    this.hotelsService.getRooms(param).subscribe( res => {
      this.rooms = res
    }, err => {
      console.log(err)
    })
  }

}
