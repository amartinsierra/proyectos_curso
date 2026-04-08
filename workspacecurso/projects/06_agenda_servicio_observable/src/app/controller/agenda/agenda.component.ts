import { Component, signal } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../../services/agenda-service';

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

  constructor(private agendaService:AgendaService){

  }

  agregarContacto():void{
    this.agendaService.agregar(this.contacto()).subscribe(b=>{
        if(!b){
              alert("Contacto repetido!!!");
        }else{
          this.mensaje.set("Contacto "+this.contacto().nombre+" guardado");
          this.contacto.set({"nombre":"","telefono":"","edad":0});
        }
    });

  }
  mostrarTodos():void{
    this.agendaService.obtenerContactos().subscribe(
      data=>{
          this.contactos.set(data);
          this.show.set(true);
      }
    )
  }
}
