import { Component, OnInit, signal } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { Resultado } from '../../model/Resultado';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent implements OnInit{
  tematicas=signal<string[]>([]);
  tematica=signal<string>("--Tematica--");
   //guardaremos los resultados de la búsqueda
  resultados=signal<Resultado[]>([]);

  constructor(private buscadorService:BuscadorService){

  }
  ngOnInit(): void {
    this.buscadorService.tematicas().subscribe(data=>this.tematicas.set(data));

  }


   buscar():void{
      this.buscadorService.buscar(this.tematica()).subscribe({
        next:data=>this.resultados.set(data),
        error: err=>alert(err)
      });
   }
}
