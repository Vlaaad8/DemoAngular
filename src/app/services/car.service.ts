import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';


const CAR_API='http://localhost:8080/CarVertical'


@Injectable({
  providedIn: 'root'
})

export class CarService {

  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(CAR_API);
    
  }

  getCar(id: number) {
      return this.http.get<any>(CAR_API+'/'+id)
  }

  addCar(car : any){
    this.http.post(CAR_API+"/add",car).subscribe(
      {
        next: (v) => console.log("Just added a new car: "+ v),
        error: (err) => console.error(err)
      }
    )
  }
  
  deleteCar(id: number){
    this.http.delete(CAR_API+"/"+id).subscribe( (v) =>
      console.log(v)
  )
  }
  updateCar(car: any){
    this.http.put(CAR_API+"/"+car.id,car).subscribe({
      next: (v)=>
    console.log(v),
      error: (err)=> console.error(err)
    }
    )
  }
  

constructor(private http: HttpClient) { }

}
