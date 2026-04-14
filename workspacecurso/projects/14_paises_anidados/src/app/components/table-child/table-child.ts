import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Pais } from '../../model/Pais';

@Component({
  selector: 'app-table-child',
  imports: [CommonModule],
  templateUrl: './table-child.html',
  styleUrl: './table-child.css',
})
export class TableChild {
  @Input() paises=signal<Pais[]>([]);

}
