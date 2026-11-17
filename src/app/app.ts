import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header';
import { FooterComponent } from './shared/components/footer/footer';
// Indica a Angular cómo se configura este componente y qué vista utiliza.
@Component({ selector: 'app-root', standalone: true, imports: [RouterOutlet, HeaderComponent, FooterComponent], templateUrl: './app.html', styleUrl: './app.less' })
// Clase del componente o servicio; reúne sus datos y sus funciones.
export class AppComponent {}
