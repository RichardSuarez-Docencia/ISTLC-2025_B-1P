import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICrearPelicula, ICrearPeliculaResponse, IGenero, IGeneroResponse, IPeliculaResponse } from './Interface/PeliculaInterface';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  private http = inject(HttpClient);
  private url = 'http://cine.runasp.net/';//http://cine.runasp.net/api/Peliculas
  private endpointPelicula = this.url + "api/Peliculas";
  private endpointGenero = this.url + "api/Generos"

  private urlPelicula = "http://cine.runasp.net/api/Peliculas"
  obtenerGenero(): Observable<IGenero[]>{
    return this.http.get<IGenero[]>(this.endpointGenero);
  }

  GuardarGenero(genero: IGenero): Observable<IGeneroResponse>{
    return this.http.post<IGenero>(this.endpointGenero,genero);
  }

  EditarGenero(genero: IGenero): Observable<IGeneroResponse>{
    return this.http.put<IGenero>(`${this.endpointGenero}/${genero.idGenero}`,genero);
  }

  EliminarGenero(id: number): Observable<IGeneroResponse>{
    return this.http.delete(`${this.endpointGenero}/${id}`);
  }

  GuardarPelicula(pelicula: ICrearPelicula): Observable<ICrearPeliculaResponse>{
    return this.http.post<ICrearPeliculaResponse>(this.endpointPelicula,pelicula);
  }

  obtenerPeliculas(): Observable<IPeliculaResponse[]>{
    return this.http.get<IPeliculaResponse[]>(this.endpointPelicula);
  }
}
