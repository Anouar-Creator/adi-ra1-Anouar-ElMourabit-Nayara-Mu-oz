import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ComicService } from '../../core/services/comic.service';
import { PageBannerComponent } from '../../shared/components/page-banner/page-banner';
import { PriceLabelComponent } from '../../shared/components/price-label/price-label';

@Component({ selector: 'app-comic-detail', standalone: true, imports: [CommonModule, RouterLink, PageBannerComponent, PriceLabelComponent], templateUrl: './comic-detail.html', styleUrl: './comic-detail.css' })

export class ComicDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly servicio = inject(ComicService);

  readonly comic = this.servicio.obtenerPorSlug(this.route.snapshot.paramMap.get('slug') ?? '');

  alertaCompra = false;
// Esto activa el aviso que se muestra al pulsar el botón de compra.
  mostrarAviso(): void { this.alertaCompra = true; }
}
