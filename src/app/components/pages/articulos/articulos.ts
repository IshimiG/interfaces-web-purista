import { Component } from '@angular/core';
import { CArticulo } from '../../ui/c-articulo/c-articulo';
import { CBoton } from '../../ui/c-boton/c-boton';
import { CBarraProgreso } from '../../ui/c-barra-progreso/c-barra-progreso';
import { CPanel } from '../../ui/c-panel/c-panel';

@Component({
  selector: 'page-articulos',
  imports: [CArticulo, CBoton, CBarraProgreso, CPanel],
  templateUrl: './articulos.html',
  styleUrl: './articulos.scss',
})
export class Articulos {

}
