import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NovedadesComponent } from './components/novedades/novedades.component';

const routes: Routes = [


  {path: 'home', component:HomeComponent},
  {path: 'novedades', component:NovedadesComponent},
  // {path: '', component:},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, 
  {path: '**', component: ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
