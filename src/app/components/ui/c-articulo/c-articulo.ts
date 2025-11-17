import {Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
 
@Component({
  selector: 'c-articulo',
  imports: [CommonModule],
  templateUrl: './c-articulo.html',
  styleUrl: './c-articulo.scss',
})
export class CArticulo implements OnInit  {
  @Input() nombre:string="";
  @Input() urlImagen:string="";
  @Input() precioActual:number=0;
  @Input() precioAnterior:number=0;
  @Input() valoracion:number=0;
  @Input() numeroOpiniones:number=0;
  @Input() fechaEntrega!:Date | string;
  @Input() precioEnvio:number=0;
  @Input() otrosEnvios:boolean=false;
  @Input() articleBackgroundColor!: 'dark' | 'light';
  @Input() articleWidth!: 'small' | 'medium' | 'large';

  @HostBinding('class')
  get Clazz(): Record<string, boolean> {
    return {
      'g--background-color-gris-1': this.articleBackgroundColor === 'dark',
      'g--background-color-blanco-1': this.articleBackgroundColor === 'light',
      'g--width-1': this.articleWidth ==='small'
    }
  }

  ngOnInit() {
    this.fechaEntrega = new Date(this.fechaEntrega);
  }
}