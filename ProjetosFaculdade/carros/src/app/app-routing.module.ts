import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarroDetalheComponent } from './carro-detalhe/carro-detalhe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarrosComponent } from './carros/carros.component';

const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path:'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: CarroDetalheComponent},
  { path: 'carros', component: CarrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
