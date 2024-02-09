import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { AboutmeComponent } from '../pages/aboutme/aboutme.component';
import { EstudiosComponent } from '../pages/estudios/estudios.component';
import { CursosComponent } from '../pages/cursos/cursos.component';
import { HobbiesComponent } from '../pages/hobbies/hobbies.component';
import { LenguajesComponent } from '../pages/lenguajes/lenguajes.component';
import { ProyectosComponent } from '../pages/proyectos/proyectos.component';
import { WorksComponent } from '../pages/works/works.component';
import { NoexisteComponent } from '../pages/noexiste/noexiste.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutmeComponent },
  { path: 'estudios', component: EstudiosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'lenguajes', component: LenguajesComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'trabajos', component: WorksComponent },
  { path: '**', component: NoexisteComponent }
];

@NgModule({
  exports: [
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class GlobalesModule { }
