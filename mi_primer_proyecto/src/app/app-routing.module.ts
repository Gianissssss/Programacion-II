import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasosDeExitoComponent } from './pages/casos-de-exito/casos-de-exito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'',component:InicioComponent},
  
  {path:'equipo',component:EquipoComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'casos_de_exito',component:CasosDeExitoComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'**',component:InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
