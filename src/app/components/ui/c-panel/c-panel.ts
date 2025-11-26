import { Component, Input } from '@angular/core';

@Component({
  selector: 'c-panel',
  imports: [],
  templateUrl: './c-panel.html',
  styleUrl: './c-panel.scss',
})
export class CPanel {
  @Input() color: 'azul' | 'rojo' | 'verde' = 'azul';
}
