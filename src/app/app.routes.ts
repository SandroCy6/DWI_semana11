import { Routes } from '@angular/router';
import { CoursesComponent } from './courses';
import { HomeComponent } from './home';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: '**', redirectTo: '' }
];
