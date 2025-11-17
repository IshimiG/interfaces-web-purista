import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articulos } from './components/pages/articulos/articulos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Articulos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('interfaces-web-purito');
}
