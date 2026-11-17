import { Component } from '@angular/core';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner';
// Indica a Angular cómo se configura este componente y qué vista utiliza.
@Component({ selector: 'app-quienes-somos', standalone: true, imports: [PageBannerComponent], templateUrl: './quienes-somos.html', styleUrl: './quienes-somos.css' })
// Clase del componente o servicio; reúne sus datos y sus funciones.
export class QuienesSomosComponent {}
