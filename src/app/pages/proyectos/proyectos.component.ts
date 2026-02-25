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
      "Descripcion": "Bla bnla bla asdlasdnasljdnb",
      "proyectos": [
        {
          "tagColor": "blue",
          "name": "Monedero",
          "descripction": "Software encargado de gestionar los ingresos y gastos de cualquier persona que lo use. Este se debe alimentar manualmente",
          "status": "Finalizado",
          "typeApp": "Aplicativo web",
          "repositorio": "https://github.com/RichardFuentes369/Monedero",
          "lenguajes": [
            {
              'name': 'Php',
              'color': 'blue',
              'icon': 'devicon-php-plain colored'
            },
            {
              'name': 'Laravel',
              'color': 'red',
              'icon': 'devicon-laravel-plain colored'
            },
            {
              'name': 'Vue',
              'color': 'green',
              'icon': 'devicon-vuejs-plain colored'
            },
            {
              'name': 'JavaScript',
              'color': 'blue',
              'icon': 'devicon-javascript-plain colored'
            }
          ]
        },
        {
          "tagColor": "blue",
          "name": "Inventario",
          "descripction": "Software encargado de llevar un inventario de productos",
          "status": "Finalizado",
          "typeApp": "Aplicativo web",
          "repositorio": "https://github.com/RichardFuentes369/Inventario",
          "lenguajes": [
            {
              'name': 'Php',
              'color': 'blue',
              'icon': 'devicon-php-plain colored'
            },
            {
              'name': 'Laravel',
              'color': 'red',
              'icon': 'devicon-laravel-plain colored'
            },
            {
              'name': 'Vue',
              'color': 'green',
              'icon': 'devicon-vuejs-plain colored'
            },
            {
              'name': 'JavaScript',
              'color': 'blue',
              'icon': 'devicon-javascript-plain colored'
            }
          ]
        },
        {
          "tagColor": "blue",
          "name": "Restaurante",
          "descripction": "Software encargado de administrar los precios, platos, menus y recaudacion de dinero del negocio",
          "status": "Finalizado",
          "typeApp": "Aplicativo web",
          "repositorio": "https://github.com/RichardFuentes369/restaurante",
          "lenguajes": [
            {
              'name': 'Php',
              'color': 'blue',
              'icon': 'devicon-php-plain colored'
            },
            {
              'name': 'Laravel',
              'color': 'red',
              'icon': 'devicon-laravel-plain colored'
            },
            {
              'name': 'Vue',
              'color': 'green',
              'icon': 'devicon-vuejs-plain colored'
            },
            {
              'name': 'JavaScript',
              'color': 'blue',
              'icon': 'devicon-javascript-plain colored'
            }
          ]
        },
        {
          "tagColor": "blue",
          "name": "Valet-parking",
          "descripction": "Software encargado de registra el movimiento de un parqueadero de vehiculos y a su vez facturar dependiendo del tipo de vehivulo, moto o carro y la fraccion de la hora, dia, semana,mes",
          "status": "Finalizado",
          "typeApp": "Aplicativo web",
          "repositorio": "https://github.com/RichardFuentes369/valetParking",
          "lenguajes": [
            {
              'name': 'Php',
              'color': 'blue',
              'icon': 'devicon-php-plain colored'
            },
            {
              'name': 'Laravel',
              'color': 'red',
              'icon': 'devicon-laravel-plain colored'
            },
            {
              'name': 'Vue',
              'color': 'green',
              'icon': 'devicon-vuejs-plain colored'
            },
            {
              'name': 'JavaScript',
              'color': 'blue',
              'icon': 'devicon-javascript-plain colored'
            }
          ]
        },
        {
          "tagColor": "blue",
          "name": "Sisconotas",
          "descripction": "Software encargado de registrar la notas de los alumnos de x colegio del grado 0 al grado 5to",
          "status": "Finalizado",
          "typeApp": "Aplicativo web",
          "repositorio": "https://github.com/RichardFuentes369/Sisconotas",
          "lenguajes": [
            {
              'name': 'Php',
              'color': 'blue',
              'icon': 'devicon-php-plain colored'
            },
            {
              'name': 'Laravel',
              'color': 'red',
              'icon': 'devicon-laravel-plain colored'
            },
            {
              'name': 'JavaScript',
              'color': 'blue',
              'icon': 'devicon-javascript-plain colored'
            }
          ]
        },
        {
          "tagColor": "blue",
          "name": "ChatInterno Web-App",
          "descripction": "Software web para la comunicación de personal interno de una empresa o negocio",
          "status": "Finalizado",
          "typeApp": "Aplicativo web",
          "repositorio": "https://github.com/RichardFuentes369/chatLaravel",
          "lenguajes": [
            {
              'name': 'Php',
              'color': '#507CF2',
              'icon': 'devicon-php-plain colored'
            },
            {
              'name': 'Laravel',
              'color': 'red',
              'icon': 'devicon-laravel-plain colored'
            },
            {
              'name': 'JavaScript',
              'color': 'blue',
              'icon': 'devicon-javascript-plain colored'
            }
          ]
        },
        {
          "tagColor": "blue",
          "name": "Template core - angular nest",
          "descripction": " Software web para gestión de permisos y modulos",
          "status": "Construcción",
          "typeApp": "Aplicativo web",
          "repositorio": "https://github.com/RichardFuentes369/angular_csr_nest",
          "lenguajes": [
            {
              'name': 'Node',
              'color': 'red',
              'icon': 'devicon-nodejs-plain colored'
            },            
            {
              'name': 'Nest',
              'color': 'red',
              'icon': 'devicon-nestjs-original colored'
            },
            {
              'name': 'Angular',
              'color': 'red',
              'icon': 'devicon-angular-plain'
            }
          ]
        },
      ],
    },
  ]

}
