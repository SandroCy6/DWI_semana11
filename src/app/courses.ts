import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './courses.html',
  styleUrls: ['./app.css']
})
export class CoursesComponent {
  protected readonly slides = [
    {
      badge: 'Nuevo',
      title: 'Angular y UI moderna',
      subtitle: 'Construye interfaces responsive con animaciones, componentes y estilo profesional.',
      duration: '8 semanas',
      level: 'Intermedio',
    },
    {
      badge: 'Top',
      title: 'Full Stack Web',
      subtitle: 'Aprende Node, bases de datos y deployment junto a proyectos reales.',
      duration: '10 semanas',
      level: 'Avanzado',
    },
    {
      badge: 'Bootcamp',
      title: 'Diseño web integrado',
      subtitle: 'Maqueta páginas y landing con HTML, CSS y accesibilidad mobile first.',
      duration: '6 semanas',
      level: 'Principiante',
    },
  ];
}
