import { Component, OnInit, signal } from '@angular/core';
import { PaisesService } from '../../service/paises.service';
import { Pais } from '../../model/Pais';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paises',
  imports: [CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent implements OnInit{
  paises=signal<Pais[]>([]);
  continentes=signal<Set<string>>(new Set());
  constructor(private paisesService:PaisesService){}
  ngOnInit(): void {
    this.paisesService.getContinentes().subscribe(data=>this.continentes.set(data));
  }
  cargarPaises(event):void{
    this.paisesService.getPaisesContinente(event.target.value).subscribe(data=>this.paises.set(data));
  }

}
