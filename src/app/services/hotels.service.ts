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

}
