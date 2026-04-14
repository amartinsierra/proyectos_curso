import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-combo-child',
  imports: [],
  templateUrl: './combo-child.html',
  styleUrl: './combo-child.css',
})
export class ComboChild {
  @Input() continentes=signal<string[]>([]);
  @Output() seleccion:EventEmitter<string>=new EventEmitter();

  seleccionContinente(event){
    this.seleccion.emit(event.target.value);
  }

}
