import { Component } from '@angular/core';

@Component({
  selector: 'app-pages-estudios',
  templateUrl: './estudios.component.html',
  styleUrl: './estudios.component.css'
})
export class EstudiosComponent {

  public Estudios = [
    {
      "name": "Estudios Universitarios",
      "expandir": true,
      "estudios": [
        {
          "name": "Ingeniería de Sistemas",
          "tagColor": "blue",
          "cursos": [
            {
              'nombre': 'Ingeniería de Sistemas - Unidades Tecnológicas de Santander (Cursando 10° Semestre)',
              'link': ''
            },
          ]
        },
        {
          "name": "Tecnología",
          "tagColor": "blue",
          "cursos": [
            {
              'nombre': 'Tecnología en Desarrollo de Sistemas Informáticos (2015-2019)',
              'link': ''
            },
          ]
        },
      ],
    },
    {
      "name": "Cursos & Certificados",
      "expandir": false,
      "estudios": [
        {
          "name": "Udemy & Especializados",
          "tagColor": "blue",
          "cursos": [
            {
              'nombre': 'Angular de cero a experto - Fernando Herrera',
              'link': 'https://www.udemy.com/certificate/UC-70a1a51c-38d4-4dce-aab6-bd28b398f23c/'
            },
            {
              'nombre': 'Nest: Desarrollo backend escalable - Fernando Herrera',
              'link': 'https://www.udemy.com/certificate/UC-4d390a9a-f74f-41ab-a915-37e46323726e/'
            },
            {
              'nombre': 'React de cero a experto (Hooks & MERN) - Fernando Herrera',
              'link': ''
            },
            {
              'nombre': 'Laravel y Vue avanzado - Jorge Alexis Paz Barrera',
              'link': 'https://www.udemy.com/certificate/UC-bc1323f8-26ed-4240-9d83-97eaba53a460/'
            },
            {
              'nombre': 'Curso de PHP y MVC - Lubutech dev',
              'link': ''
            },
          ]
        },
      ],
    },
  ]

  selectCategory(position: number) {
    this.Estudios.forEach((item, index) => {
      item.expandir = (index === position);
    });
  }

}