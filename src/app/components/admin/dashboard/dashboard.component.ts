import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.open('https://app.powerbi.com/view?r=eyJrIjoiY2RjNWY4MzItYzZhZS00NjM1LThhNDEtYmRmYzdjZmJjZjA1IiwidCI6IjI0NGY2NjM0LWRkMTctNGYzZC1hOTUzLTk0NzM4MDBmZGVlMyJ9', '_blank')
  }

}
