import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos',
  imports: [FormsModule],
  templateUrl: './datos.html',
  styleUrl: './datos.css',
})
export class Datos {
  /*nombre:string;
  edad:number;
  mensaje:string;

  procesar(){
    this.mensaje="Bienvenido/a "+this.nombre+" tienes "+this.edad+" años";
  }*/
 //usando signals
 nombre=signal<string>("");
 edad=signal<number>(0);
 mensaje=signal<string>("");

 procesar(){
  this.mensaje.set("Bienvenido/a "+this.nombre()+" tienes "+this.edad()+" años")
 }


}
