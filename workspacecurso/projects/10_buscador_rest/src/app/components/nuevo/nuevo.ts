import { Component, signal } from '@angular/core';
import { Item } from '../../model/Item';
import { ItemsService } from '../../services/items-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  imports: [FormsModule],
  templateUrl: './nuevo.html',
  styleUrl: './nuevo.css',
})
export class Nuevo {
  item=signal<Item>({url:"",tematica:"",descripcion:""});
  constructor(private itemsService:ItemsService){}
  alta():void{
    this.itemsService.save(this.item()).subscribe({
      next:r=>alert("Añadido correctamente"),
      error:e=>alert("No se pudo añadir")
    });
  }
}
