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