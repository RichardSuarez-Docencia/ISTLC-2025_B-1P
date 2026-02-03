import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IPelicula } from '../../Interface/PeliculaInterface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const ELEMENT_DATA: IPelicula[] = [
  {id: 1, nombre: 'Rapidos Furiosos', poster:'url',duracion:'2 horas', descripcion: 'Bonita Pelicula' },
  {id: 1, nombre: 'Bob Esponja', poster:'url',duracion:'2 horas', descripcion: 'Bonita Pelicula' },
  {id: 1, nombre: 'El regreso de Calamardo', poster:'url',duracion:'2 horas', descripcion: 'Bonita Pelicula' },
  {id: 1, nombre: 'Patricio Estrella', poster:'url',duracion:'2 horas', descripcion: 'Bonita Pelicula' },
  {id: 1, nombre: 'Viernes 13', poster:'url',duracion:'2 horas', descripcion: 'Bonita Pelicula' },
];

@Component({
  selector: 'app-pelicula',
  imports: [MatButtonModule,MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {

  displayedColumns: string[] = ['id', 'nombre', 'poster', 'duracion', 'descripcion', 'accion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
