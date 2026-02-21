export interface IPelicula {
  id: number;
  nombre: string;
  poster: string;
  duracion: string;
  descripcion: string;
}

export interface IGenero{
    idGenero?: number;
    nombre?: string;
}

export interface IGeneroResponse{
    idGenero?: number;
    mensaje?: string;
}

export interface IActor{
    id: number;
    nombre: string;
    imagen: string;
    fechaNacimiento: string;
    nacionalidad: string;
}

export interface ICrearPelicula {
    nombre:      string;
    poster:      string;
    idGenero:    number;
    descripcion: string;
    trailer:     string;
}

export interface ICrearPeliculaResponse {
    idPelicula: number;
    mensaje:    string;
}

export interface IPeliculaResponse {
    idPelicula:     number;
    nombrePelicula: string;
    poster:         string;
    genero:         string;
    descripcion:    string;
    trailer:        string;
    actores:        null | string;
}

export interface IActorResponse {
    idActor:         number;
    nombre:          string;
    imagen:          string;
    fechaNacimiento: Date;
    nacionalidad:    string;
}


export interface IAsignacionAp {
    idActor: number;
    idPelicula: number;
}