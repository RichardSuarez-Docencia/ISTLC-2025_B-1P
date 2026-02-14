import { Component, inject } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { Router, RouterLink } from "@angular/router";
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PeliculaService } from '../../pelicula-service';
import { IGenero } from '../../Interface/PeliculaInterface';
import Swal from 'sweetalert2'
import { FormularioGenero } from '../formulario-genero/formulario-genero';


@Component({
  selector: 'app-crear-genero',
  imports: [MatAnchor, RouterLink, MatFormField, MatLabel, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormularioGenero],
  templateUrl: './crear-genero.html',
  styleUrl: './crear-genero.css',
})
export class CrearGenero {
  service = inject(PeliculaService);
  route = inject(Router);

  guardar(genero: IGenero) {
    console.log("Hiciste submit");
    //console.log(this.form.value);
    console.log(` he recibido el posteo del formulario genero: ${JSON.stringify(genero)}`);
    /*let genero: IGenero = {
      nombre:  ''
    }*/
    this.service.GuardarGenero(genero).subscribe(data => {
      console.log(data);
      this.mostrarAlerta(data.mensaje!);
      this.route.navigateByUrl('/genero');
    });
  }

  mostrarAlerta(mensaje: string) {
    Swal.fire({
      title: mensaje,
      icon: "success",
      draggable: true
    });
  }
}
