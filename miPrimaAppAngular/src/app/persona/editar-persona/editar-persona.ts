import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-persona',
  imports: [],
  templateUrl: './editar-persona.html',
  styleUrl: './editar-persona.css',
})
export class EditarPersona implements OnInit {
  id!: string;
  constructor(private router: ActivatedRoute){
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id') || ''; 
    console.log("Obteniendo id de la Url: "+this.id);
  }

}
