import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PeliculaService } from '../../pelicula-service';
import { ICrearPelicula, IGenero } from '../../Interface/PeliculaInterface';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crearpelicula',
  imports: [FormsModule, MatFormFieldModule,
    MatInputModule,MatSelectModule, ReactiveFormsModule, MatButtonModule, RouterLink],
  templateUrl: './crearpelicula.html',
  styleUrl: './crearpelicula.css',
})
export class Crearpelicula implements OnInit{
  serviceGenero = inject(PeliculaService);
  router = inject(Router);
  listaGenero!: IGenero[];

  formBuilder= inject(FormBuilder);
  form = this.formBuilder.group({
    nombre :[''],
    poster: [''],
    idGenero : 0,
    trailer : [''],
    descripcion: ['']
  });

  ngOnInit(): void {
    this.obtenerGenero();
  }

  obtenerGenero(){
    this.serviceGenero.obtenerGenero().subscribe(data => {
      console.log(data);
      this.listaGenero = data;
    });
  }

  guardar(){
    console.log("Valores digitados del formulario:");
    console.log(this.form.value);
    let pelicula: ICrearPelicula = {
      descripcion : this.form.value.descripcion ?? '',
      idGenero : this.form.value.idGenero ?? 0,
      nombre : this.form.value.nombre ?? '',
      poster : this.form.value.poster ?? '',
      trailer : this.form.value.trailer ?? ''
    }
    this.serviceGenero.GuardarPelicula(pelicula).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("/pelicula");
      this.mostrarAlerta(data.mensaje);
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
