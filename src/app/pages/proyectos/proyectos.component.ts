import { Component } from '@angular/core';

@Component({
  selector: 'app-pages-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  public Proyectos = [
    {
      "name": "Proyectos personales",
      "proyectos": [
        {
          "name": "MermasApp",
          "descripction": "Software web para el control de mermas y alertas tempranas de productos próximos a vencer. Cuenta con escáner de barras móvil en React Native.",
          "status": "Construcción",
          "typeApp": "Aplicativo Web & Móvil",
          "repositorio": "https://github.com/RichardFuentes369/coreman",
          "lenguajes": [
            { 'name': 'Node', 'icon': 'devicon-nodejs-plain colored' },
            { 'name': 'NestJS', 'icon': 'devicon-nestjs-original colored' },
            { 'name': 'Angular', 'icon': 'devicon-angular-plain colored' },
            { 'name': 'React Native', 'icon': 'devicon-reactnative-original colored' }
          ]
        },
        {
          "name": "Coreman",
          "descripction": "Software web para la gestión centralizada de permisos, módulos y autenticación en arquitecturas distribuidas.",
          "status": "Construcción",
          "typeApp": "Aplicativo Web",
          "repositorio": "https://github.com/RichardFuentes369/coreman",
          "lenguajes": [
            { 'name': 'Node', 'icon': 'devicon-nodejs-plain colored' },
            { 'name': 'NestJS', 'icon': 'devicon-nestjs-original colored' },
            { 'name': 'Angular', 'icon': 'devicon-angular-plain colored' }
          ]
        },
        {
          "name": "Monedero",
          "descripction": "Sistema de gestión de finanzas personales para el control detallado de ingresos y gastos dinámicos.",
          "status": "Finalizado",
          "typeApp": "Aplicativo Web",
          "repositorio": "https://github.com/RichardFuentes369/Monedero",
          "lenguajes": [
            { 'name': 'PHP', 'icon': 'devicon-php-plain colored' },
            { 'name': 'Laravel', 'icon': 'devicon-laravel-plain colored' },
            { 'name': 'Vue.js', 'icon': 'devicon-vuejs-plain colored' },
            { 'name': 'JavaScript', 'icon': 'devicon-javascript-plain colored' }
          ]
        },
        {
          "name": "Restaurante",
          "descripction": "Plataforma para administrar precios, menús, comandas y recaudación financiera en establecimientos gastronómicos.",
          "status": "Finalizado",
          "typeApp": "Aplicativo Web",
          "repositorio": "https://github.com/RichardFuentes369/restaurante",
          "lenguajes": [
            { 'name': 'PHP', 'icon': 'devicon-php-plain colored' },
            { 'name': 'Laravel', 'icon': 'devicon-laravel-plain colored' },
            { 'name': 'Vue.js', 'icon': 'devicon-vuejs-plain colored' }
          ]
        },
        {
          "name": "Valet Parking",
          "descripction": "Control de movimientos y facturación automatizada para parqueaderos según categoría de vehículo y fracciones de tiempo.",
          "status": "Finalizado",
          "typeApp": "Aplicativo Web",
          "repositorio": "https://github.com/RichardFuentes369/valetParking",
          "lenguajes": [
            { 'name': 'PHP', 'icon': 'devicon-php-plain colored' },
            { 'name': 'Laravel', 'icon': 'devicon-laravel-plain colored' },
            { 'name': 'Vue.js', 'icon': 'devicon-vuejs-plain colored' }
          ]
        },
        {
          "name": "ChatInterno Web-App",
          "descripction": "Sistema web para la comunicación en tiempo real entre colaboradores internos de una organización.",
          "status": "Finalizado",
          "typeApp": "Aplicativo Web",
          "repositorio": "https://github.com/RichardFuentes369/chatLaravel",
          "lenguajes": [
            { 'name': 'PHP', 'icon': 'devicon-php-plain colored' },
            { 'name': 'Laravel', 'icon': 'devicon-laravel-plain colored' },
            { 'name': 'JavaScript', 'icon': 'devicon-javascript-plain colored' }
          ]
        }
      ]
    }
  ];

}