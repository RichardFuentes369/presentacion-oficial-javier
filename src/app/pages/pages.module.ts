import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosComponent } from '../pages/cursos/cursos.component'
import { HobbiesComponent } from '../pages/hobbies/hobbies.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { WorksComponent } from './works/works.component';
import { EstudiosComponent } from './estudios/estudios.component';

@NgModule({
  declarations: [
    CursosComponent,
    HobbiesComponent,
    LenguajesComponent,
    ProyectosComponent,
    WorksComponent,
    EstudiosComponent
  ],
  exports: [
    CursosComponent,
    HobbiesComponent,
    LenguajesComponent,
    ProyectosComponent,
    WorksComponent
  ],
  imports: [
    CommonModule
  ],
})
export class PagesModule { }
