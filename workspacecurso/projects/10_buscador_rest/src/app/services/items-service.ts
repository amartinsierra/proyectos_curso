import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/Item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private readonly urlBase:string="http://localhost:8000/buscador/items"
  constructor(private http:HttpClient){}

  findByTematica(tematica:string):Observable<Item[]>{
    return this.http.get<Item[]>(this.urlBase,{params:{tematica:tematica}});
  }

  deleteByUrl(url:string):Observable<Item>{
    return this.http.delete<Item>(this.urlBase,{params:{url:url}});
  }

  save(item:Item):Observable<void>{
    let heads:HttpHeaders=new HttpHeaders()
    heads=heads.set("Content-Type","application/json");
    return this.http.post<void>(this.urlBase,item,{headers:heads});
  }
}
