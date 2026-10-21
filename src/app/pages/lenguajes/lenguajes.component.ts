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
      "lenguajes": [
        {
          "name": "Node.js",
          "frameworks": [
            { "name": "NestJS", "icon": "devicon-nestjs-original colored" }
          ]
        },
        {
          "name": "PHP",
          "frameworks": [
            { "name": "Laravel", "icon": "devicon-laravel-plain colored" },
            { "name": "CodeIgniter", "icon": "devicon-codeigniter-plain colored" }
          ]
        }
      ],
    },
    {
      "name": "Frontend",
      "lenguajes": [
        {
          "name": "Frameworks & CSS",
          "frameworks": [
            { "name": "Bootstrap 4", "icon": "devicon-bootstrap-plain colored" },
            { "name": "Bootstrap 5", "icon": "devicon-bootstrap-plain colored" },
            { "name": "Element UI", "icon": "devicon-elementui-plain colored" }
          ]
        },
        {
          "name": "Recursos",
          "frameworks": [
            { "name": "Google Fonts", "icon": "fas fa-font text-primary" },
            { "name": "FontAwesome", "icon": "fab fa-font-awesome text-primary" }
          ]
        }
      ],
    },
    {
      "name": "Móvil",
      "lenguajes": [
        {
          "name": "Cross-Platform",
          "frameworks": [
            { "name": "React Native", "icon": "devicon-reactnative-original colored" }
          ]
        }
      ],
    },
    {
      "name": "Bases de Datos",
      "lenguajes": [
        {
          "name": "Relacionales & NoSQL",
          "frameworks": [
            { "name": "MySQL", "icon": "devicon-mysql-plain colored" },
            { "name": "PostgreSQL", "icon": "devicon-postgresql-plain colored" },
            { "name": "MongoDB", "icon": "devicon-mongodb-plain colored" }
          ]
        }
      ],
    },
    {
      "name": "Versionamiento & DevOps",
      "lenguajes": [
        {
          "name": "Control de Código",
          "frameworks": [
            { "name": "Git", "icon": "devicon-git-plain colored" },
            { "name": "GitHub", "icon": "devicon-github-original" },
            { "name": "GitLab", "icon": "devicon-gitlab-plain colored" },
            { "name": "Azure DevOps", "icon": "devicon-azure-plain colored" }
          ]
        },
      ],
    },
  ];

}