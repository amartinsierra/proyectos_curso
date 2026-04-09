import { routes } from './../../../../../02_pagina_datos/src/app/app.routes';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    this.router.navigate(["/buscar"]);
  }

}
