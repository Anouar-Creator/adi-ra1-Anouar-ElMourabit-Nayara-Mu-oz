import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
// Indica a Angular cómo se configura este componente y qué vista utiliza.
@Component({
selector: 'app-header',
standalone: true,
imports: [RouterLink, RouterLinkActive],
templateUrl: './header.html',
styleUrl: './header.css'
})
// Clase del componente o servicio; reúne sus datos y sus funciones.
export class HeaderComponent {}