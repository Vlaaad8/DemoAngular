import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { CarDetailComponent } from "../car-detail/car-detail.component";
import { NgFor } from '@angular/common';
import {filter,map} from 'rxjs'
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  imports: [CarDetailComponent
    ,NgFor
  ]
})
export class CarListComponent implements OnInit {
  cars!: Car[]

  constructor(private carService: CarService) { }

  ngOnInit() {
   this.carService.getCars().subscribe((data: Car[])=>{
      console.log("Here are you cars:" + data);
      this.cars=data;
    })
  }

  handleRemove($event: any) {
    this.carService.deleteCar($event.id);
    this.carService.getCars().subscribe((data: Car[])=>{
      this.cars=data;
    })
}
  handleNotInUse(){
    const observable$= this.carService.getCars().pipe(map((cars => cars.filter(car => car.inUse==false))));
    observable$.subscribe((v)=> this.cars=v
    )
  }

    handleInUse(){
    const observable$= this.carService.getCars().pipe(map((cars => cars.filter(car => car.inUse==true))));
    observable$.subscribe((v)=> this.cars=v
    )
  }
  handleReset(){
     this.carService.getCars().subscribe((data: Car[])=>{
      this.cars=data;
    })
  }

}
