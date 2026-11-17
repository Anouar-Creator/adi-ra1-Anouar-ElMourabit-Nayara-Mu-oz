import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Comic } from '../../../core/interfaces/comic';

@Component({ selector: 'app-comic-card', standalone: true, imports: [RouterLink], templateUrl: './comic-card.html', styleUrl: './comic-card.css' })

export class ComicCardComponent {
// recibe información del componente que utiliza este componente.
  @Input({ required: true }) comic!: Comic;
  
  @Output() seleccionado = new EventEmitter<Comic>();
// Envía el cómic seleccionado al componente que contiene la tarjeta.
  seleccionar(): void { 
    this.seleccionado.emit(this.comic); }
}
