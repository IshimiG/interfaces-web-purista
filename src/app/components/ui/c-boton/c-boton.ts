import { Component, Input } from '@angular/core';

@Component({
  selector: 'c-boton',
  imports: [],
  templateUrl: './c-boton.html',
  styleUrl: './c-boton.scss',
})
export class CBoton {
  @Input() funcion:'primaria' | 'secundaria' | 'peligrosa' = 'primaria';
}
