import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarBaseComponent } from './car-base.component';
import { CarListComponent } from './car-list/car-list.component';
import { HttpClient, HttpClientModule,} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarFormComponent } from './car-form/car-form.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HighlightTextDirective } from '../directives/HighlightText.directive';
``

const routes: Routes=[
  {
    path: '',
    children: [
      {path: '', component: CarListComponent},
      {path: ':id', component: CarFormComponent}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CarListComponent,
    CarDetailComponent,
    CarFormComponent,
    RouterModule.forChild(routes),
    HighlightTextDirective
  ],
  declarations: []
})
export class CarBaseModule { }
