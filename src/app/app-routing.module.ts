import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { ForecastComponent } from './common/forecast/forecast.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'forecast/:zipcode', component: ForecastComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }