import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAnchor } from '@angular/material/button';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { IGenero } from '../../Interface/PeliculaInterface';

@Component({
  selector: 'app-formulario-genero',
  imports: [MatAnchor, RouterLink, MatFormField, MatLabel, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './formulario-genero.html',
  styleUrl: './formulario-genero.css',
})
export class FormularioGenero implements OnInit {
  @Input() InputGenero?: IGenero;
  @Output() posteoFormulario = new EventEmitter<IGenero>

  ngOnInit(): void {
    if(this.InputGenero){
      this.form.patchValue({nombre: this.InputGenero.nombre});
    }  
  }

  private formbuilder = inject(FormBuilder);
  form = this.formbuilder.group({
    nombre: ['', { validators: [Validators.required], }],
  });

    obtenerMensajeError() {
      const error = this.form.controls.nombre;
      if (error.hasError('required')) {
        return "El campo nombre es requerido"
      } else {
        return "";
      }
    }

    guardar(){
      console.log(this.form.value.nombre);
      let genero: IGenero ={
        idGenero: this.InputGenero?.idGenero,
        nombre :this.form.value.nombre ?? '' 
      }
      this.posteoFormulario.emit(genero);
    }
}
