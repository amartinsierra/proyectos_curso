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
  error:boolean=false;
  constructor(private itemsService:ItemsService){}
  alta(form:any):void{
    if(form.invalid){
      this.error=true;
      return;
    }
    this.itemsService.save(this.item()).subscribe({
      next:r=>alert("Añadido correctamente"),
      error:e=>alert("No se pudo añadir")
    });
  }
}
