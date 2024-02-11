import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { LenguajesComponent } from './lenguajes/lenguajes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { AboutmeComponent } from './aboutme/aboutme.component'

@NgModule({
  declarations: [
    AboutmeComponent,
    LenguajesComponent,
    ProyectosComponent,
    EstudiosComponent
  ],
  exports: [
    AboutmeComponent,
    LenguajesComponent,
    ProyectosComponent,
    EstudiosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class PagesModule { }
