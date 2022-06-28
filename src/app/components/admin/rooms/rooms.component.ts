import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(
    private roomService: RoomService
  ) { }

  rooms
  hotelEdit: any = null

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(res => {
      this.rooms = res
      console.log(res)
    }, err => {
      console.log(err)
    })
  }

  addRoom() {
    this.rooms.push({
      id: null,
      name: "",
      description: "",
      adresse: "",
      nombreRooms: "",
      nombreEtoiles: ""
    })
    this.hotelEdit = this.rooms.length - 1
  }

  toogleEdit(i) {
    if (this.hotelEdit != null) {
      this.roomService.addOrEditRoom(this.rooms[i]).subscribe(res => {
        this.rooms[i] = res
        console.log(res)
      }, err => {
        console.log(err)
      })

      this.hotelEdit = null
    } else {
      this.hotelEdit = i
    }
  }

  deleteRoom(index, id) {
    this.rooms.splice(index, 1)
    if (id != null) {
      this.roomService.deleteRoom(id).subscribe(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    }
  }
}
