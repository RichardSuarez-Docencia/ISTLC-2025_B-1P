import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hija',
  imports: [],
  templateUrl: './hija.html',
  styleUrl: './hija.css',
})
export class Hija {

  /*constructor(private route: Router){
  }*/
 private route = inject(Router);

  regresarPaginaAnterior(){
    this.route.navigate(['/estudiante']);
  }


}
