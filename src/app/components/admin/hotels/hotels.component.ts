import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  private readonly notifier: NotifierService;

  constructor(
    notifierService: NotifierService,
    private hotelService: HotelsService
  ) {
    this.notifier = notifierService;
   }

  hotels
  hotelEdit: any = null

  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(res => {
      this.hotels = res
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

  addHotel() {
    this.hotels.push({
      id: null,
      name: "",
      description: "",
      adresse: "",
      nombreRooms: "",
      nombreEtoiles: ""
    })
    this.hotelEdit = this.hotels.length - 1
  }

  toogleEdit(i) {
    if (this.hotelEdit != null) {
      this.hotelService.addOrEditHotel(this.hotels[i]).subscribe(res => {
        this.hotels[i] = res
        this.notifier.notify('success', 'hotel bien enregistré');
        console.log(res)
      }, err => {
        this.notifier.notify('error', 'hotel non enreigtré');
        console.log(err)
      })

      this.hotelEdit = null
    } else {
      this.hotelEdit = i
    }
  }

  deleteHotel(index, id) {
    this.hotels.splice(index, 1)
    if (id != null) {
      this.hotelService.deleteHotel(id).subscribe(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    }
  }
}
