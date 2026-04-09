import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Consulta } from './app/components/consulta/consulta';
import { Nuevo } from './app/components/nuevo/nuevo';
import { Main } from './app/components/main/main';


bootstrapApplication(Main, appConfig).catch((err) => console.error(err));
