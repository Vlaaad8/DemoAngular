import { Component, OnInit } from '@angular/core';
import { CarListComponent } from "./car-list/car-list.component";

@Component({
  selector: 'app-car-base',
  templateUrl: './car-base.component.html',
  styleUrls: ['./car-base.component.css'],
  imports: [CarListComponent]
})
export class CarBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
