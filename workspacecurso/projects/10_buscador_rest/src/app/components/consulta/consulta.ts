import { Component, OnInit, signal } from '@angular/core';
import { ItemsService } from '../../services/items-service';
import { Item } from '../../model/Item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  imports: [FormsModule],
  templateUrl: './consulta.html',
  styleUrl: './consulta.css',
})
export class Consulta {
  items=signal<Item[]>([]);
  tematicaSel=signal<string>("");
  constructor(private itemsService:ItemsService){}

  buscar(){
    this.itemsService.findByTematica(this.tematicaSel()).subscribe({
      next:data=>this.items.set(data),
      error:err=>alert(`${err}. No se pudo mostrar la información`)
    });
  }

  eliminar(url:string){
    this.itemsService.deleteByUrl(url).subscribe({
      next:data=>alert(`se elimino ${data.url} de ${data.tematica}`),
      error:err=>alert(`${err}. No se pudo eliminar`)
    });
  }

}
