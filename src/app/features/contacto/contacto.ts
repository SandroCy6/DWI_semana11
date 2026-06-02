import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  private fb = inject(FormBuilder);

  mensaje = '';
  mostrarMensaje = false;

  form = this.fb.group({
    nombres: ['', Validators.required],
    celular: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    dni: ['', Validators.required],
    ciclo: [''],
    fechaNacimiento: ['', Validators.required],
    sedeInteres: [''],
    telefonoFijo: ['', Validators.required],
    comoSeEntero: [''],
    acepta: [false, Validators.requiredTrue],
  });

  enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.mensaje = 'Completa los campos obligatorios.';
      this.mostrarMensaje = true;
      return;
    }

    this.mensaje = 'Enviado correctamente.';
    this.mostrarMensaje = true;
    this.form.reset({
      ciclo: '',
      sedeInteres: '',
      comoSeEntero: '',
      acepta: false,
    });
  }
}
