import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sedes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sedes.html',
  styleUrl: './sedes.css',
})
export class Sedes {
  sedes = [
    {
      nombre: 'Comas',
      imagen:
        'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80',
      direccion: 'Av. Tupac Amaru 1234, Comas',
      maps: 'https://www.google.com/maps?q=Av.+Tupac+Amaru+1234+Comas',
    },
    {
      nombre: 'Breña',
      imagen:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
      direccion: 'Jr. Breña 456, Lima',
      maps: 'https://www.google.com/maps?q=Jr.+Breña+456+Lima',
    },
    {
      nombre: 'Puente Piedra',
      imagen:
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
      direccion: 'Av. Buenos Aires 789, Puente Piedra',
      maps: 'https://www.google.com/maps?q=Av.+Buenos+Aires+789+Puente+Piedra',
    },
    {
      nombre: 'Ate',
      imagen:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
      direccion: 'Av. Nicolás Ayllón 321, Ate',
      maps: 'https://www.google.com/maps?q=Av.+Nicolás+Ayllón+321+Ate',
    },
    {
      nombre: 'San Juan de Lurigancho',
      imagen:
        'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80',
      direccion: 'Av. Próceres 654, SJL',
      maps: 'https://www.google.com/maps?q=Av.+Próceres+654+SJL',
    },
    {
      nombre: 'Surco',
      imagen:
        'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
      direccion: 'Av. Benavides 987, Surco',
      maps: 'https://www.google.com/maps?q=Av.+Benavides+987+Surco',
    },
  ];
}
