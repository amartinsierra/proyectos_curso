import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { filter, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  contactos:Contacto[]=[];

  agregar(contacto:Contacto):Observable<boolean>{
    if(this.contactos.some(c=>c.telefono==contacto.telefono)){
      return of(false);
    }
    this.contactos.push(contacto);
    return of(true);
  }
  obtenerContactos():Observable<Contacto[]>{
    return of(this.contactos);
  }

  buscarContacto(telefono:string):Observable<Contacto>{
    return this.obtenerContactos().pipe(map(m=>m.find(c=>c.telefono=telefono)));
  }

  buscarPorNombre(nombre:string):Observable<Contacto[]>{
      //return  of(this.contactos.filter(c=>c.nombre==nombre));
      return this.obtenerContactos().pipe(map(m=>m.filter(c=>c.nombre==nombre)));
  }

  listaNombres():Observable<string[]>{
    return this.obtenerContactos().pipe(map(m=>m.map(c=>c.nombre)));
  }

}
