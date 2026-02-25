import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { AboutmeComponent } from '../pages/aboutme/aboutme.component';
import { EstudiosComponent } from '../pages/estudios/estudios.component';
import { LenguajesComponent } from '../pages/lenguajes/lenguajes.component';
import { ProyectosComponent } from '../pages/proyectos/proyectos.component';
import { NoexisteComponent } from '../pages/noexiste/noexiste.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutmeComponent, },
  { path: 'estudios', component: EstudiosComponent, },
  { path: 'lenguajes', component: LenguajesComponent, },
  { path: 'proyectos', component: ProyectosComponent, },
  { path: '**', component: NoexisteComponent, }
];

@NgModule({
  exports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    BannerComponent
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    BannerComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class GlobalesModule { }
