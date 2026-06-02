import { Routes } from '@angular/router';
import { CoursesComponent } from './courses';
import { Contacto } from './features/contacto/contacto';
import { HomeComponent } from './home';
import { Sedes } from './features/sedes/sedes';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: 'contacto', component: Contacto },
  { path: 'sedes', component: Sedes },
  { path: '**', redirectTo: '' }
];
