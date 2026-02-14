import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenero, IGeneroResponse } from './Interface/PeliculaInterface';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  private http = inject(HttpClient);
  private url = 'http://cine.runasp.net/api/Generos';

  obtenerGenero(): Observable<IGenero[]>{
    return this.http.get<IGenero[]>(this.url);
  }

  GuardarGenero(genero: IGenero): Observable<IGeneroResponse>{
    return this.http.post<IGenero>(this.url,genero);
  }

  EditarGenero(genero: IGenero): Observable<IGeneroResponse>{
    return this.http.put<IGenero>(`${this.url}/${genero.idGenero}`,genero);
  }

  EliminarGenero(id: number): Observable<IGeneroResponse>{
    return this.http.delete(`${this.url}/${id}`);
  }

}
