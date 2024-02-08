import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GlobalesModule } from './globales/globales.module'

import { WorksComponent } from './pages/works/works.component';
import { LenguajesComponent } from './pages/lenguajes/lenguajes.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { NoexisteComponent } from './pages/noexiste/noexiste.component';

@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    LenguajesComponent,
    CursosComponent,
    ProyectosComponent,
    HobbiesComponent,
    AboutmeComponent,
    NoexisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalesModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
