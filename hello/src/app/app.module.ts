import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { EventosComponent } from './eventos/eventos.component';
import { TwowayComponent } from './twoway/twoway.component';
import { InjecaodpComponent } from './injecaodp/injecaodp.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyComponent,
    DiretivasComponent,
    EventosComponent,
    TwowayComponent,
    InjecaodpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
