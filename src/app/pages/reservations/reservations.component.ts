import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reservations',
    templateUrl: './reservations.component.html',
    styleUrls: ['./reservations.component.css'],
    standalone: false
})
export class ReservationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any): void {
    console.log(event)
  }
}
