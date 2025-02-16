import { Component, OnInit } from "@angular/core";

interface City {
  name: string;
  code: string;
}

@Component({
    selector: 'app-reservations',
    templateUrl: './reservations.component.html',
    styleUrls: ['./reservations.component.css'],
    standalone: false
})
export class ReservationsComponent implements OnInit {

  schedule = {
    'almoço': [ 1200, 1230, 1300, 1330, 1400 ],
    'jantar': [ 1800, 1830, 1900, 1930, 2000, 2030, 2100, 2130]
  }

  reservation = {
    date: new Date(),
    time: 0,
    people: 0,
    name: ''
  }

  formComponent = 0;

  number: string | undefined;

  selectedCity: City | undefined;

  cities: City[] = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any): void {
    console.log(event)
  }

  onDateSelected(event: any) {
    this.reservation.date = event;
    console.log(event);
    this.nextComponent();
  }

  onTimeSelected(event: any) {
    this.reservation.time = event;
    console.log(event);
    this.nextComponent()
  }

  onNumberSelected(event: any) {
    this.reservation.people = event;
    console.log(event);
    this.nextComponent()
  }

  nextComponent() {
    this.formComponent++;
  }
}
