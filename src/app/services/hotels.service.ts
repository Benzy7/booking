import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(
    private http: HttpClient
  ) { }

  hotelsUrl = environment.api + 'hotels/'
  roomsUrl = environment.api + 'rooms/'

  getHotels(){
    return this.http.get(this.hotelsUrl)
  }

  getRooms(param){
    return this.http.get(this.roomsUrl + param)
  }

  addOrEditHotel(hotel){
    if (hotel.id != null) {
      return this.updateHotel(hotel)
    } else {
      return this.addHotel(hotel)
    }
  }

  addHotel(hotel){
    return this.http.post(this.hotelsUrl, hotel)
  }

  updateHotel(hotel){
    return this.http.put(this.hotelsUrl+hotel.id+'/', hotel)
  }

  deleteHotel(id){
    return this.http.delete(this.hotelsUrl+id+'/')
  }

}
