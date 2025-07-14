import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '../../models/car';
import { EmailValidator } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
  imports: [CommonModule]
})
export class CarDetailComponent implements OnInit {

@Input()
  carDetails!: Car;

@Output()
  remove: EventEmitter<any>=new EventEmitter

  constructor() { }

  handleDelete() {
    this.remove.emit(this.carDetails)
} 


  ngOnInit() {
  }

}
