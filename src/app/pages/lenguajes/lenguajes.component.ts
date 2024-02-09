import { Component } from '@angular/core';

@Component({
  selector: 'app-pages-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrl: './lenguajes.component.css'
})
export class LenguajesComponent {

  public Cursos: object[] = [
    {
      'name': 'Php',
      'frameworks': [
        {
          'name': 'js',
          'tagColor': 'blue'
        },
        {
          'name': 'ts',
          'tagColor': 'blue'
        }
      ],
    },
    {
      'name': 'Php',
      'frameworks': [
        {
          'name': 'js',
          'tagColor': 'blue'
        },
        {
          'name': 'ts',
          'tagColor': 'blue'
        }
      ],
    },    {
      'name': 'Php',
      'frameworks': [
        {
          'name': 'js',
          'tagColor': 'blue'
        },
        {
          'name': 'ts',
          'tagColor': 'blue'
        }
      ],
    },    {
      'name': 'Php',
      'frameworks': [
        {
          'name': 'js',
          'tagColor': 'blue'
        },
        {
          'name': 'ts',
          'tagColor': 'blue'
        }
      ],
    },
  ]

}
