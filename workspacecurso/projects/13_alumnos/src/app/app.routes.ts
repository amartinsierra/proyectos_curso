import { Routes } from '@angular/router';
import { AltaComponent } from './controller/alta/alta.component';
import { AlumnosCursoComponent } from './controller/alumnos-curso/alumnos-curso.component';

export const routes: Routes = [{
    path: "alta/:textoBoton",
    component: AltaComponent
  },
  {
    path: "alumnosCurso",
    component: AlumnosCursoComponent
  }
  ];
