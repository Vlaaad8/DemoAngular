package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/CarVertical")
public class CarController {

    @Autowired
    private RepositoryCar repositoryCar;

    @GetMapping
    public List<Car> getCars(){
        return repositoryCar.findAll();
    }

    @GetMapping("{id}")
    public Car getCar(@PathVariable int id){
        return repositoryCar.getById(id).orElse(null);
    }

    @PostMapping("/add")
    public Car addCar(@RequestBody Car car){
        return repositoryCar.save(car).orElse(null);
    }
    @DeleteMapping("{id}")
    public Car deleteCar(@PathVariable int id){
       return repositoryCar.delete(id).orElse(null);
    }

    @PutMapping("{id}")
    public Car updateCar(@PathVariable int id, @RequestBody Car car){
        return repositoryCar.update(car).orElse(null);
    }



}
