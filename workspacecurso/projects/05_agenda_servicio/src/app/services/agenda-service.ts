import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  contactos:Contacto[]=[];

  agregar(contacto:Contacto):boolean{
    if(this.contactos.some(c=>c.telefono==contacto.telefono)){
      return false;
    }
    this.contactos.push(contacto);
    return true;
  }
  obtenerContactos():Contacto[]{
    return this.contactos;
  }

}
