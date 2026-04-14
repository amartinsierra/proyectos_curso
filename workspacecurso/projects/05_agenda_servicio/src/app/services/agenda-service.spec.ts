import { TestBed } from '@angular/core/testing';

import { AgendaService } from './agenda-service';
import { Contacto } from '../model/Contacto';

describe('AgendaService', () => {
  let service: AgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("debe ser verdadero",()=>{
    const contacto:Contacto={nombre:"c1",telefono:"333",edad:25};
    expect(service.agregar(contacto)).toBeTruthy();
  })
  it("debe ser falso",()=>{
    const contacto:Contacto={nombre:"c1",telefono:"333",edad:25};
    service.agregar(contacto);
    const contacto2:Contacto={nombre:"c454",telefono:"333",edad:77};
    expect(service.agregar(contacto2)).toBeFalsy();
  })
  it("debe ser 2",()=>{
    const contacto:Contacto={nombre:"c1",telefono:"333",edad:25};
    const contacto2:Contacto={nombre:"c454",telefono:"2567",edad:77};
    service.agregar(contacto);
    service.agregar(contacto2);
    expect(service.obtenerContactos().length).toBe(2);
  })
});
