import { Component, OnInit } from '@angular/core';
import { CarBaseComponent } from '../car-base/car-base.component';
import { CarFormComponent } from '../car-base/car-form/car-form.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CarBaseComponent,CarFormComponent]
})
export class HomeComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
