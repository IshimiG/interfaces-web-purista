import { Component, Input } from '@angular/core';

@Component({
  selector: 'c-barra-progreso',
  imports: [],
  templateUrl: './c-barra-progreso.html',
  styleUrl: './c-barra-progreso.scss',
})
export class CBarraProgreso {
  @Input() progreso: number = 10;
  @Input() string: string = '';

  max:number = 100;

  incrementar() {
    if (this.progreso >= 100) {
      this.progreso = 0;
    }
    else {
      this.progreso += 10;
    }
  }
}
