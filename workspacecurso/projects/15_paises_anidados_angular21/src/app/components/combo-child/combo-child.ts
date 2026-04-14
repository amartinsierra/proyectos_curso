import { Component, EventEmitter, input, Input, output, Output, signal } from '@angular/core';

@Component({
  selector: 'app-combo-child',
  imports: [],
  templateUrl: './combo-child.html',
  styleUrl: './combo-child.css',
})
export class ComboChild {
  continentes=input<string[]>([]);
  seleccion=output<string>();

  seleccionContinente(event){
    this.seleccion.emit(event.target.value);
  }

}
