import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EquipoComponent } from './pages/equipo/equipo.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CasosDeExitoComponent } from './pages/casos-de-exito/casos-de-exito.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { CombosComponent } from './pages/combos/combos.component';
import { ContratoComponent } from './pages/contrato/contrato.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent,
    EquipoComponent,
    ContactoComponent,
    CasosDeExitoComponent,
    ServiciosComponent,
    CombosComponent,
    ContratoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
