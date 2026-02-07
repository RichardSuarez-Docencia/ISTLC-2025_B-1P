import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenero } from './Interface/PeliculaInterface';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  private http = inject(HttpClient);
  private url = 'http://cine.runasp.net/api/Generos';

  obtenerGenero(): Observable<IGenero[]>{
    return this.http.get<IGenero[]>(this.url);
  }

  guardarGenero(genero: IGenero): Observable<IGenero>{
    return this.http.post<IGenero>(this.url,genero);
  }

}
