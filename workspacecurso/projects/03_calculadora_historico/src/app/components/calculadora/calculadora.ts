import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Operacion } from '../../model/Operacion';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule,CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  num1=signal<number>(0);
  num2=signal<number>(0);
  resultado=signal<string>("");
  historico=signal<Operacion[]>([]);
  show=signal<boolean>(false);
  sumar(){
    let r:string=this.num1()+"+"+this.num2()+"="+(this.num1()+this.num2());
    /*let actual=this.historico();
    actual.push(r)
    this.historico.set(actual)*/
    this.historico.update(lst=>[...lst,new Operacion("suma",this.num1()+"+"+this.num2(),(this.num1()+this.num2()))]);
    this.resultado.set(r)
  }
  multiplicar(){
    let r:string=`${this.num1()}X${this.num2()}=${this.num1()*this.num2()}`;
    this.historico.update(lst=>[...lst,new Operacion("multiplicacion",this.num1()+"X"+this.num2(),(this.num1()*this.num2()))]);
    this.resultado.set(r)
  }
  showHistorico(){
    this.show.set(true);
  }
}
