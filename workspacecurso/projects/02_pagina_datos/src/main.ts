import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Datos } from './app/components/datos/datos';


bootstrapApplication(Datos, appConfig).catch((err) => console.error(err));
