import { Component, signal } from '@angular/core';
import { Alumno } from '../../model/Alumno';
import { AlumnosService } from '../../service/alumnos.service';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-alumnos-curso',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './alumnos-curso.component.html',
  styleUrl: './alumnos-curso.component.css'
})
export class AlumnosCursoComponent {
  protected cursos=signal<string[]>([]);
  protected alumnosPorCurso=signal<Alumno[]>([]);

  constructor(private alumnosService: AlumnosService) { }
  ngOnInit(): void {
    this.alumnosService.cursos().subscribe(data => this.cursos.set(data));

  }
  mostrarAlumnos(event: any): void {
    let curso = event.target.value
    this.alumnosService.alumnosCurso(curso).subscribe(data => this.alumnosPorCurso.set(data))
  }
  borrarAlumno(email: string): void{
    this.alumnosService.eliminarAlumno(email).subscribe({
      next: () => {
        alert(`Se ha eliminado correctamente el alumno con el email ${email}`)
        /*let index = this.alumnosPorCurso.indexOf(this.alumnosPorCurso.find(alumno => alumno.email === email))
        this.alumnosPorCurso.splice(index, 1)*/
        this.alumnosPorCurso.set(this.alumnosPorCurso().filter(a=>a.email!=email));
      },
    error: (e) => { if (e.status === 409) { alert(`No se ha podido eliminar al alumno con este email: ${email}`) } }
  });
  }


}
