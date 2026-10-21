import { Component, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-globales-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public isCollapsed: boolean = false;
  public isMenuOpen: boolean = false; // Control de menú móvil
  public isDarkMode: boolean = false;
  public tituloActual: string = 'Sobre mí';

  @Output() sidebarCollapsed = new EventEmitter<boolean>();

  constructor(private router: Router) {
    // Detectar ruta actual para actualizar el título móvil automáticamente
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.actualizarTituloRuta(event.urlAfterRedirects);
      this.isMenuOpen = false; // Cerrar menú móvil al cambiar de ruta
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarCollapsed.emit(this.isCollapsed);
  }

  openToogle() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  private actualizarTituloRuta(url: string) {
    if (url.includes('estudios')) this.tituloActual = 'Estudios';
    else if (url.includes('lenguajes')) this.tituloActual = 'Lenguajes';
    else if (url.includes('proyectos')) this.tituloActual = 'Proyectos';
    else this.tituloActual = 'Sobre mí';
  }
}