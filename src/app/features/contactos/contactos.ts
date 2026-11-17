import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner';
// Indica a Angular cómo se configura este componente y qué vista utiliza.
@Component({ selector: 'app-contactos', standalone: true, imports: [CommonModule, FormsModule, PageBannerComponent], templateUrl: './contactos.html', styleUrl: './contactos.css' })
// Clase del componente o servicio; reúne sus datos y sus funciones.
export class ContactosComponent {
  nombre = ''; correo = ''; mensaje = ''; enviado = false;
// Comprueba los campos del formulario y muestra si se ha enviado.
  enviar(): void { if (this.nombre.trim() && this.correo.includes('@') && this.mensaje.trim()) { this.enviado = true; this.nombre = ''; this.correo = ''; this.mensaje = ''; } }
}
