import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { PeliculaService } from '../../pelicula-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IGenero } from '../../Interface/PeliculaInterface';
import { MatAnchor } from '@angular/material/button';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormularioGenero } from '../formulario-genero/formulario-genero';

@Component({
  selector: 'app-editar-genero',
  imports: [MatAnchor, RouterLink, MatFormField, MatLabel, MatFormFieldModule, MatInputModule, ReactiveFormsModule,FormularioGenero],
  templateUrl: './editar-genero.html',
  styleUrl: './editar-genero.css',
})
export class EditarGenero implements OnInit{
private formbuilder = inject(FormBuilder);
  form = this.formbuilder.group({
    nombre: ['', { validators: [Validators.required], }],
  });
  service = inject(PeliculaService);
  route = inject(Router);
  routeActivated = inject(ActivatedRoute);

  genero! :IGenero;

  id: string='';
  ngOnInit(): void {
    this.id = this.routeActivated.snapshot.paramMap.get('id') || ''; 
    let id = Number.parseInt(this.id);
    this.service.obtenerGenero().subscribe(data =>{
      let informacion = data.find(x => x.idGenero == id);
      console.log(informacion);
      this.genero = {
        idGenero : informacion?.idGenero,
        nombre : informacion?.nombre
      }
      ///this.form.patchValue({nombre: informacion!.nombre});
    });

    
  }

  guardar(genero: IGenero) {
    console.log("Hiciste submit");
    console.log(`Soy el componente Padre-editar genero y recibi : ${JSON.stringify(genero)}` );

    this.service.EditarGenero(genero).subscribe(data => {
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
