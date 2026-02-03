import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IActor } from '../Interface/PeliculaInterface';


const ELEMENT_DATA: IActor[] = [
  { id :1 , nombre: 'Brad Pitt', fechaNacimiento: '26/05/1998', imagen: 'http://apicodersnet.runasp.net/actores/fd4ccb91-e5e9-4145-92c5-87825a46bc48.jpg', nacionalidad: 'Ecuatoriana'},
  { id :2 , nombre: 'Caterva', fechaNacimiento: '26/05/1998', imagen: 'http://apicodersnet.runasp.net/actores/fd4ccb91-e5e9-4145-92c5-87825a46bc48.jpg', nacionalidad: 'Ecuatoriana'},
  { id :3 , nombre: 'Carlos Escalante', fechaNacimiento: '26/05/1998', imagen: 'http://apicodersnet.runasp.net/actores/fd4ccb91-e5e9-4145-92c5-87825a46bc48.jpg', nacionalidad: 'Ecuatoriana'},
  { id :4 , nombre: 'Federico', fechaNacimiento: '26/05/1998', imagen: 'http://apicodersnet.runasp.net/actores/fd4ccb91-e5e9-4145-92c5-87825a46bc48.jpg', nacionalidad: 'Ecuatoriana'},
];

@Component({
  selector: 'app-actor',
  imports: [MatButtonModule,MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './actor.html',
  styleUrl: './actor.css',
})
export class Actor {
  displayedColumns: string[] = ['id', 'nombre', 'fechaNacimiento', 'nacionalidad', 'imagen','accion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
