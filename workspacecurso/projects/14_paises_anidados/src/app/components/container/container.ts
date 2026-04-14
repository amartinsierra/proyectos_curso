import { Component, signal } from '@angular/core';
import { Pais } from '../../model/Pais';
import { PaisesService } from '../../service/paises.service';
import { ComboChild } from '../combo-child/combo-child';
import { TableChild } from '../table-child/table-child';

@Component({
  selector: 'app-container',
  imports: [ComboChild,TableChild],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  paises=signal<Pais[]>([]);
  continentes=signal<string[]>([]);
  constructor(private paisesService:PaisesService){}
  ngOnInit(): void {
    this.paisesService.getContinentes().subscribe(data=>{
      this.continentes.set([...data]);
    }
    );
  }
  cargarPaises(continente):void{
    this.paisesService.getPaisesContinente(continente).subscribe(data=>this.paises.set(data));
  }
}
