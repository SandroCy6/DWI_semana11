import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./app.css']
})
export class HomeComponent {
  protected readonly currentSlide = signal(0);

  protected readonly slideImages = [
    {
      title: 'Desarrollo Web',
      src: 'assets/slide1.jpg',
      alt: 'Desarrollo Web - Aprender a programar'
    },
    {
      title: 'Angular & TypeScript',
      src: 'assets/slide2.jpg',
      alt: 'Angular y TypeScript - Framework moderno'
    },
    {
      title: 'Diseño Responsivo',
      src: 'assets/slide3.jpg',
      alt: 'Diseño Responsivo - Mobile First'
    }
  ];

  protected prevSlide() {
    const next = (this.currentSlide() - 1 + this.slideImages.length) % this.slideImages.length;
    this.currentSlide.set(next);
  }

  protected nextSlide() {
    const next = (this.currentSlide() + 1) % this.slideImages.length;
    this.currentSlide.set(next);
  }

  protected setSlide(index: number) {
    this.currentSlide.set(index);
  }
}
