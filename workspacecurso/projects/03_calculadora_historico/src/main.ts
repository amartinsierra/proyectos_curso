import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Calculadora } from './app/components/calculadora/calculadora';


bootstrapApplication(Calculadora, appConfig).catch((err) => console.error(err));
