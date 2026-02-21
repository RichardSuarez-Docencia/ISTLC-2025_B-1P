import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Persona } from './persona/persona';
import { NoEncontrado } from './no-encontrado/no-encontrado';
import { EditarPersona } from './persona/editar-persona/editar-persona';
import { HijoComponent } from './persona/hijo-component/hijo-component';
import { Hija } from './persona/hija/hija';
import { Pelicula } from './listadopelicula/pelicula/pelicula';
import { Genero } from './genero/genero';
import { Actor } from './actor/actor';
import { CrearGenero } from './genero/crear-genero/crear-genero';
import { EditarGenero } from './genero/editar-genero/editar-genero';
import { Crearpelicula } from './listadopelicula/crearpelicula/crearpelicula';
import { AsignarActor } from './listadopelicula/asignar-actor/asignar-actor';

export const routes: Routes = [
    { path:'', redirectTo: '/inicio' , pathMatch: 'full' },
    { path:'inicio', component: Inicio },
    { path:'pelicula', component: Pelicula },
    { path:'crearPelicula', component: Crearpelicula },
    { path:'asignarActor', component: AsignarActor },
    { path:'genero', component: Genero },
    { path:'crearGenero', component: CrearGenero },
    { path:'editarGenero/:id', component: EditarGenero },
    { path:'actor', component: Actor },

    { path:'estudiante', component: Persona},
    { path:'editarEstudiante/:id', component: EditarPersona },
    { path:'**', component:NoEncontrado},
];
