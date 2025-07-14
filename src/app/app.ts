import { Component } from '@angular/core';
import { CarFormComponent } from './car-base/car-form/car-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected title = 'TemplateAngular';
}
