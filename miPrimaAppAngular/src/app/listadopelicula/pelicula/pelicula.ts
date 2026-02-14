import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IPelicula } from '../../Interface/PeliculaInterface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { PeliculaService } from '../../pelicula-service';


@Component({
  selector: 'app-pelicula',
  imports: [MatButtonModule,MatFormFieldModule, MatInputModule, MatTableModule, RouterLink],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula implements OnInit{
  displayedColumns: string[] = ['idPelicula', 'nombrePelicula', 'poster', 'genero', 'descripcion', 'trailer', 'actores', 'accion'];
  dataSource = new MatTableDataSource();

  servicePelicula = inject(PeliculaService);

  ngOnInit(): void {
    this.servicePelicula.obtenerPeliculas().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
