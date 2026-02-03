import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-component',
  imports: [],
  templateUrl: './hijo-component.html',
  styleUrl: './hijo-component.css',
})
export class HijoComponent {
  @Input({required: true}) tituloDesdePadre! : string;
  @Output() notificarPadre = new EventEmitter<string>(); 

  devolverValoraPadre(){
    this.notificarPadre.emit("Devuelvo a mi Padre agaradecimiento");
  }
}
