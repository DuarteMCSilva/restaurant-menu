import { Component, OnInit } from "@angular/core";
import { MenuItem } from "src/app/components/breadcrumb/breadcrumb.component";

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

  breadCrumbItems: MenuItem[] = [
    { label: 'date', icon: 'pi pi-calendar', format: 'date'},
    { label: 'time', icon: 'pi pi-clock', format: 'time' },
    { label: 'number', icon: 'pi pi-hashtag', format: 'number' },
    { label: 'user', icon: 'pi pi-user', format: 'none'}
  ];

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

  onStageSelection(index: number) {
    this.formComponent = index;
  }

  onDateSelected(event: any) {
    this.reservation.date = event;
    
    this.updateBreadcrumbItems('date', event);
    this.nextComponent();
  }

  onTimeSelected(event: any) {
    this.reservation.time = event;

    this.updateBreadcrumbItems('time', event);
    this.nextComponent()
  }

  onNumberSelected(event: any) {
    this.reservation.people = event;

    this.updateBreadcrumbItems('number', event);
    this.nextComponent()
  }

  nextComponent() {
    this.formComponent++;
  }

  private updateBreadcrumbItems(label: string, value: any) {
    const dateItem = this.breadCrumbItems.find((item) => item.label === label );

    if(!dateItem) return;

    const dateItemIndex = this.breadCrumbItems.findIndex((item) => item.label === label );

    const newBC: MenuItem[] = [...this.breadCrumbItems]
    newBC[dateItemIndex] = {...dateItem, value}

    this.breadCrumbItems = newBC;

  }
}
