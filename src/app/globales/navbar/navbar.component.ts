import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-globales-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  xxx: string = 'collapse';
  tituloActual: string = 'Menú';

  private nombresRutas: Record<string, string> = {
    '/about': 'Sobre mí',
    '/estudios': 'Estudios',
    '/lenguajes': 'Lenguajes',
    '/proyectos': 'Proyectos'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.actualizarTitulo(this.router.url);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.actualizarTitulo(event.urlAfterRedirects);
      this.xxx = 'collapse';
    });
  }

  private actualizarTitulo(url: string): void {
    this.tituloActual = this.nombresRutas[url] || 'Menú';
  }

  openToogle(): void {
    this.xxx = (this.xxx === 'collapse') ? '' : 'collapse';
  }
}