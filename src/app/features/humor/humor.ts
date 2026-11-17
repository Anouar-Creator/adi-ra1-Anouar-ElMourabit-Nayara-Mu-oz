import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ComicService } from '../../core/services/comic.service';
import { Comic } from '../../core/interfaces/comic';
import { ComicCardComponent } from '../../shared/components/comic-card/comic-card';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner';
// Indica a Angular cómo se configura este componente y qué vista utiliza.
@Component({ selector: 'app-humor', standalone: true, imports: [CommonModule, ComicCardComponent, PageBannerComponent], templateUrl: './humor.html', styleUrl: './humor.css' })
// Clase del componente o servicio; reúne sus datos y sus funciones.
export class HumorComponent {
  readonly comics = inject(ComicService).obtenerHumor();
// Recibe el cómic que ha seleccionado el usuario.
  comicSeleccionado(comic: Comic): void { console.log('Cómic de humor seleccionado:', comic.titulo); }
}
