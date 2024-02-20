import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-pages-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css',
})
export class AboutmeComponent {


  public Trabajos = [
    {
      "empresa": "Nexura International SAS",
      "periodo": "05/07/2022 - 30/11/2023",
      "temporada": "2022-2023",
      "tiempo": this.tiempoLaborado('05-07-2022','30-11-2023')
    },
    {
      "empresa": "SmartData & Automation",
      "periodo": "11/11/2020 - 30/06/2021",
      "temporada": "2020-2021",
      "tiempo": this.tiempoLaborado('11-11-2020','30-06-2021')
    },
    {
      "empresa": "Grupo Bien Pensado",
      "periodo": "02/03/2019 - 30/07/2019",
      "temporada": "2019",
      "tiempo": this.tiempoLaborado('02-03-2019','30-07-2019')
    }
  ]

  calcularEdad(){
    moment.locale("es");
    const a = moment([moment().format('YYYY'), moment().format('MM'), moment().format('DD')]);
    const b = moment([1996, 6, 1]);

    const anhos = a.diff(b, 'year')
    return anhos
  }

  tiempoLaborado(fechaInicio: string, fechaFin:string){

    let fI = fechaInicio.split('-')
    let fF = fechaFin.split('-')

    moment.locale("es");
    const a = moment([fF[2],fF[1],fF[0]]);
    const b = moment([fI[2],fI[1],fI[0]]);

    let respuesta = ''

    if( a.diff(b, 'month') > 0 ) {

      let anhos = a.diff(b, 'years')
      let meses = a.diff(b, 'month') - (a.diff(b, 'years') * 12)

      if(anhos > 0){
        respuesta += anhos + ' años'
      }

      if(meses > 0){
        if(respuesta){
          respuesta += ' y ' + meses + ' meses'
        }else{
          respuesta += meses + ' meses'
        }
      }

    }

    return respuesta

  }

}
