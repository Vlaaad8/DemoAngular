import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { LOCATION_UPGRADE_CONFIGURATION } from '@angular/common/upgrade';
import { CarBaseComponent } from './car-base/car-base.component';

const routes: Routes = [
  {path: '', component: HomeComponent,pathMatch:"full"},
  {path: 'car', component: CarBaseComponent},
  {path: "**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
