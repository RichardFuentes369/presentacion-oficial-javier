import { Component } from '@angular/core';

@Component({
  selector: 'app-pages-estudios',
  templateUrl: './estudios.component.html',
  styleUrl: './estudios.component.css'
})
export class EstudiosComponent {

  public Estudios = [
    {
      "name": "Estudios",
      "expandir": true,
      "estudios": [
        {
          "name": "Primaria",
          "tagColor": "blue",
          "cursos": [
            {
              'nombre': 'Instituto Madre del Buen Consejo 2003-2003',
              'link': ''
            },
            {
              'nombre': 'Colegio Metropolitano del Sur 2004-2007',
              'link': ''
            },
          ]
        },
        {
          "name": "Bachillerato",
          "tagColor": "blue",
          "cursos": [
            {
              'nombre': 'Instituto Empresarial Gabriela Mistral 2008-2014',
              'link': ''
            },
          ]
        },
        {
          "name": "Universitarios",
          "tagColor": "blue",
          "cursos": [
            {
              'nombre': 'Tecnología en desarrollo de sistemas informaticos 2015-2019',
              'link': ''
            },
            {
              'nombre': 'Ingenieria de sistemas 2024',
              'link': ''
            },
          ]
        },
      ],
    },
    {
      "name": "Cursos",
      "expandir": false,
      "estudios": [
        {
          "name": "Udemy",
          "tagColor": "blue",
          "cursos": [
            {
              'nombre': 'Angular de cero a experto Fernando Herrera',
              'link': 'https://www.udemy.com/certificate/UC-70a1a51c-38d4-4dce-aab6-bd28b398f23c/'
            },
            {
              'nombre': 'Nest desarrollo backend escalable Fernando Herrera',
              'link': 'https://www.udemy.com/certificate/UC-4d390a9a-f74f-41ab-a915-37e46323726e/'
            },
            {
              'nombre': 'React de cero a experto hooks mern Fernando Herrera',
              'link': ''
            },
            {
              'nombre': 'Laravel y vue avanzado Jorge Alexis Paz Barrera',
              'link': 'https://www.udemy.com/certificate/UC-bc1323f8-26ed-4240-9d83-97eaba53a460/'
            },
            {
              'nombre': 'Curso de php y mvc Lubutech dev',
              'link': ''
            },
          ]
        },
      ],
    },
  ]

  openCollapse(position: number){
    this.Estudios[position].expandir = !this.Estudios[position].expandir
  }

}
