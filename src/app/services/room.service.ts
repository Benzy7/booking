import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient
  ) { }

  roomsUrl = environment.api + 'rooms/'


  getRooms() {
    return this.http.get(this.roomsUrl)
  }

  addOrEditRoom(room) {
    if (room.id != null) {
      return this.updateRoom(room)
    } else {
      return this.addRoom(room)
    }
  }

  addRoom(room) {
    return this.http.post(this.roomsUrl, room)
  }

  updateRoom(room) {
    return this.http.put(this.roomsUrl + room.id + '/', room)
  }

  deleteRoom(id) {
    return this.http.delete(this.roomsUrl + id + '/')
  }
}
