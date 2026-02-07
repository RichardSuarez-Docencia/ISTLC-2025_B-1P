import { Component, inject } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PeliculaService } from '../../pelicula-service';
import { IGenero } from '../../Interface/PeliculaInterface';

@Component({
  selector: 'app-crear-genero',
  imports: [MatAnchor, RouterLink, MatFormField, MatLabel,MatFormFieldModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './crear-genero.html',
  styleUrl: './crear-genero.css',
})
export class CrearGenero {

  private formbuilder= inject(FormBuilder);
  form = this.formbuilder.group({
    nombre: ['',{validators: [Validators.required],}],
  });

  servicio = inject(PeliculaService);
  guardar(){
    console.log("Hiciste submit");
    console.log(this.form.value);
    let genero : IGenero ={
      nombre : this.form.value.nombre ?? ''
    }
    this.servicio.guardarGenero(genero).subscribe(data => {
      console.log(data);
    });
  }

  obtenerMensajeError(){
    const error = this.form.controls.nombre;
    if(error.hasError('required')){
      return "El campo nombre es requerido"
    }else{
      return "";
    }
  }
  
}
