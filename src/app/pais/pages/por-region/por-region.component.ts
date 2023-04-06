import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button {
    margin-right: 10px;
  } `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa','americas','asia','europe','oceania']
  regionActiva: string = '';
  paises: Country[] = [];
  
  constructor(private paisService: PaisService) {}

  getClassCSS(region: string): string {
    return (region === this.regionActiva) 
              ? 'btn btn-primary'
              : 'btn btn-outline-primary';
  }       /// funcion que hace condicional una clase de CSS ?='entonces' :='de lo contrario'

  activarRegion(region: string) {

    if(region === this.regionActiva) {return;}      //valida que si la region seleccionada es igual a la activa, no se carge de nuevo
    this.regionActiva = region;
    this.paises = [];                           //vacia la variable paises para mejorar la velocidad de carga
    this.paisService.buscarRegion(region)
      .subscribe(paises => this.paises = paises);
  }
} 
