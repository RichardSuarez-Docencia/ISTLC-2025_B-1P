import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persona } from "./persona/persona";
import { CommonModule } from '@angular/common';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Persona, CommonModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   tituloPeriodico :string = "El Universo escrito desde Typescript";

   persona :any[] = [
    {nombre:'Pablo'},
    {nombre:'Pepep'},
    {nombre:'Pedro'}
   ]
   
   valorTotal: number = 8;
   variableTexto: string = "juanito"
   variableTextoMinuscula: string = "MARIANO"

   edad:number = 18;

}
