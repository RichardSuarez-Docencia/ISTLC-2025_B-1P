import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listadopelicula',
  imports: [RouterLink, FormsModule, RouterOutlet, MatCardModule, MatButtonModule],
  templateUrl: './listadopelicula.html',
  styleUrl: './listadopelicula.css',
})
export class Listadopelicula {

}
