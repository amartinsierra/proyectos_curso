import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  error:boolean=false;
  formClients=new FormGroup({
    usuario:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,Validators.minLength(5)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    telefono:new FormControl("",[Validators.required,Validators.pattern('[0-9]{9}')]),
    profesional:new FormControl(),
    instagram:new FormControl()
  })

  procesar(){
    this.error=this.formClients.invalid;
    console.log(this.error);
  }
}
