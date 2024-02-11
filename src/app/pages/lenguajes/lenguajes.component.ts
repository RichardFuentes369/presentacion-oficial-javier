import { Component } from '@angular/core';

@Component({
  selector: 'app-pages-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrl: './lenguajes.component.css'
})
export class LenguajesComponent {

  public Lenguajes = [
    {
      "name": "Backend",
      "expandir": true,
      "lenguajes": [
        {
          "name": "Node",
          "tagColor": "blue",
          "frameworks": [
            'Nest'
          ]
        },
        {
          "name": "Php",
          "tagColor": "blue",
          "frameworks": [
            'Laravel',
            'Codenigther'
          ]
        }
      ],
    },
    {
      "name": "Frontend",
      "expandir": false,
      "lenguajes": [
          {
          "name": "Css",
          "tagColor": "blue",
          "frameworks": [
            'Boostrap4',
            'Boostrap5',
            'Element ui',
          ]
        },
        {
          "name": "Fuentes",
          "tagColor": "blue",
          "frameworks": [
            'GoogleFonts',
          ]
        },
        {
          "name": "Iconos",
          "tagColor": "blue",
          "frameworks": [
            'FontAwesome',
          ]
        }
      ],
    },
    {
      "name": "Bases de datos",
      "expandir": false,
      "lenguajes": [
          {
          "name": "Sql",
          "tagColor": "blue",
          "frameworks": [
            'MySql',
            'PostgreSQl',
          ]
        },
        {
          "name": "NoSql",
          "tagColor": "blue",
          "frameworks": [
            'Mongo',
          ]
        }
      ],
    },
    {
      "name": "Versionamiento",
      "expandir": false,
      "lenguajes": [
          {
          "name": "Git",
          "tagColor": "blue",
          "frameworks": [
            'GitHub',
            'GitLab',
            'Azure',
          ]
        },
      ],
    },
  ]

  openCollapse(position: number){
    this.Lenguajes[position].expandir = !this.Lenguajes[position].expandir
  }

}
