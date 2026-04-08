import { Component, signal } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  contactos=signal<Contacto[]>([]);
  contacto=signal<Contacto>({"nombre":"","telefono":"","edad":0});
  show=signal<boolean>(false);
  mensaje=signal<string>("");

  agregarContacto():void{
    if(this.contactos().some(c=>c.telefono==this.contacto().telefono)){
      alert("Contacto repetido!!!");
      return;
    }
    this.contactos().push(this.contacto());
    this.mensaje.set("Contacto "+this.contacto().nombre+" guardado");
    this.contacto.set({"nombre":"","telefono":"","edad":0});
  }
  mostrarTodos():void{
    this.show.set(true);
  }
}
