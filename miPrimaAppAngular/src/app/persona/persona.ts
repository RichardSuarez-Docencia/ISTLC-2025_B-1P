import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { HijoComponent } from "./hijo-component/hijo-component";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-persona',
  imports: [RouterLink, FormsModule, HijoComponent, RouterOutlet, MatCardModule, MatButtonModule],
  templateUrl: './persona.html',
  styleUrl: './persona.css',
})
export class Persona {
   id: number = 0;
   nombre: string = '';
   apellido: string= '';
   edad: number =0;

   constructor(private route: Router){

  }

   mensajePadre: string = 'Hola mundo desde el componente Padre hacia mi hijo';

     estudiates: any[] = [
    { id:1, nombre:'Emrick', apellido: 'Candelo', edad: 27},
    { id:2, nombre:'Carlos', apellido: 'Mantilla', edad: 28},
    { id:3, nombre:'Carlos', apellido: 'Ramirez', edad: 25},
    { id:4, nombre:'Jhon', apellido: 'Gonzalez', edad: 27},
    { id:5, nombre:'Alfredo', apellido: 'Ordoñez', edad: 24},
    { id:6, nombre:'kevin', apellido: 'Lozano', edad: 24},
    { id:7, nombre:'Chantal', apellido: 'Peñafiel', edad: 20},
   ]

   eliminar(index: number)
   {
    this.estudiates.splice(index,1);
   }

   guardarEstudiante(){

    let persona: any = {
      id : this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad
    }
    this.estudiates.push(persona);
    console.log(`La persona tiene estos datos: ${JSON.stringify(persona)}`);
   }


   regresarPaginaAnterior(){
    this.route.navigate(['/inicio']);
  }
}
