import { Routes } from '@angular/router';
import { Nuevo } from './components/nuevo/nuevo';
import { Consulta } from './components/consulta/consulta';

export const routes: Routes = [
  {
    path:"alta",
    component:Nuevo
  },
  {
    path:"buscar",
    component:Consulta
  }
];
