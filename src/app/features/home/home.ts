import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComicService } from '../../core/services/comic.service';
import { Comic } from '../../core/interfaces/comic';
import { ComicCardComponent } from '../../shared/components/comic-card/comic-card';

@Component({ selector: 'app-home', standalone: true, imports: [CommonModule, RouterLink, ComicCardComponent], templateUrl: './home.html', styleUrl: './home.css' })

export class Home {

  private readonly comicService = inject(ComicService);
  readonly novedades = this.comicService.obtenerNovedades();

// recibe el cómic que ha seleccionado el usuario.
  comicSeleccionado(comic: Comic): void { 
    console.log('Cómic seleccionado:', comic.titulo); }
}
