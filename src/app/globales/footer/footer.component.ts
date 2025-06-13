import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-globales-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {


  year = moment().format('YYYY')
  copyrigth = ` ${this.year} Javier Ricardo Baron Fuentes`

}
