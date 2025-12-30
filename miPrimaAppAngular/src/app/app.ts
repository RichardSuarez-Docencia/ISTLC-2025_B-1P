import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from "./persona/persona";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Persona],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miPrimaAppAngular');
}
