import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComicService } from '../../core/services/comic.service';
import { Comic } from '../../core/interfaces/comic';
import { ComicCardComponent } from '../../shared/components/comic-card/comic-card';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner';

@Component({ selector: 'app-catalogo', standalone: true, imports: [CommonModule, FormsModule, ComicCardComponent, PageBannerComponent], templateUrl: './catalogo.html', styleUrl: './catalogo.css' })
export class CatalogoComponent {

  private readonly servicio = inject(ComicService);
  busqueda = '';

  get comics(): Comic[] { 
    return this.servicio.buscar(this.busqueda); }
// recibe el cómic que se ha seleccionado .
  comicSeleccionado(comic: Comic): void { console.log('Cómic seleccionado:', comic.titulo); }
}
