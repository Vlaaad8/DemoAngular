import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HighlightTextDirective } from '../../directives/HighlightText.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
  imports: [FormsModule,HighlightTextDirective,CommonModule]
})
export class CarFormComponent implements OnInit {
  car!: Car;
  constructor(private serviceCar: CarService) { }

  ngOnInit() {
    this.serviceCar.getCar(1).subscribe((v: Car)=>{
      this.car=v
    })
  }
  handleSubmit(form : NgForm){
    console.log(form.value)
    form.value.id=0
    this.serviceCar.addCar(form.value)
    form.reset();
  }
  handleUpdate(form: NgForm){
    console.log("Form Update")
    console.log(form.value)
    this.serviceCar.updateCar(form.value)
  }

}
