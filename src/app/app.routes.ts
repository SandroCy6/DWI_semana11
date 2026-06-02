import { Routes } from '@angular/router';
import { Contacto } from './features/contacto/contacto';
import { Sedes } from './features/sedes/sedes';
export const routes: Routes = [
  { path: 'contacto', component: Contacto},
  { path: 'sedes', component: Sedes },
];
