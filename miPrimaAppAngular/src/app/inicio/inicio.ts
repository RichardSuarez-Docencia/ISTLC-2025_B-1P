import { Component, signal } from '@angular/core';
import { Listadopelicula } from "../listadopelicula/listadopelicula";

@Component({
  selector: 'app-inicio',
  imports: [Listadopelicula],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
