import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { PeliculaService } from '../../pelicula-service';
import { IActorResponse, IAsignacionAp, IPeliculaResponse } from '../../Interface/PeliculaInterface';

@Component({
  selector: 'app-asignar-actor',
  imports: [FormsModule, MatFormFieldModule,
    MatInputModule,MatSelectModule, ReactiveFormsModule, MatButtonModule, RouterLink],
  templateUrl: './asignar-actor.html',
  styleUrl: './asignar-actor.css',
})
export class AsignarActor implements OnInit{

  services = inject(PeliculaService);
  formBuilder= inject(FormBuilder);
  form = this.formBuilder.group({
    idPelicula: 0,
    idActor: 0,
  });

  listaActores!: IActorResponse[];
  listaPeliculas!: IPeliculaResponse[];
 router = inject(Router);
  ngOnInit(): void {
    this.obtenerActores();
    this.obtenerPeliculas();
  }

  obtenerActores(){
    this.services.obtenerAcotres().subscribe(data =>{
      console.log(data);
      this.listaActores = data;
    });
  }

  obtenerPeliculas(){
    this.services.obtenerPeliculas().subscribe(data =>{
      console.log(data);
      this.listaPeliculas = data;
    });
  }

  guardar(){
    console.log(this.form.value);
    let asignacion: IAsignacionAp={
      idActor : this.form.value.idActor ?? 0,
      idPelicula : this.form.value.idPelicula ?? 0
    }
    this.services.GuardarAsignacionActorPelicula(asignacion).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("/pelicula");
    });
  }

}
