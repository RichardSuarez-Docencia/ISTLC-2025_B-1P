import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IGenero, IPelicula } from '../Interface/PeliculaInterface';
import { RouterLink } from "@angular/router";
import { PeliculaService } from '../pelicula-service';

const ELEMENT_DATA: IGenero[] = [
  {id: 1, nombre: 'Acción'},
  {id: 2, nombre: 'Animación'},
  {id: 3, nombre: 'Anime'},
  {id: 4, nombre: 'Mudo'},
  {id: 5, nombre: 'Ciencia Ficción'},
];

@Component({
  selector: 'app-genero',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, RouterLink],
  templateUrl: './genero.html',
  styleUrl: './genero.css',
})
export class Genero implements OnInit{

  private peliculaService = inject(PeliculaService);

  ngOnInit(): void {
    this.obtenerGeneros();
  }
   displayedColumns: string[] = ['id', 'nombre', 'accion'];
  ///dataSource: any; ///= new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerGeneros(){
    this.peliculaService.obtenerGenero().subscribe(data => {
      console.log(data);
      this.dataSource.data = data;
    });
  }

}
