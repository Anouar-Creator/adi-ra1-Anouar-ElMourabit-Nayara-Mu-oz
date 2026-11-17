import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialLinksComponent } from '../social-links/social-links';
// Indica a Angular cómo se configura este componente y qué vista utiliza.
@Component({ selector: 'app-footer', standalone: true, imports: [RouterLink, SocialLinksComponent], templateUrl: './footer.html', styleUrl: './footer.css' })
// Clase del componente o servicio; reúne sus datos y sus funciones.
export class FooterComponent {}
