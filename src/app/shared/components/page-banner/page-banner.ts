import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-page-banner',
    standalone: true,
    template: '<section class="page-banner"><p>{{ subtitulo }}</p><h1>{{ titulo }}</h1><span>{{ descripcion }}</span></section>',
    styles: [`
        .page-banner {
            background: linear-gradient(120deg,#292522,#514238);
            color: #fff;
            padding: 38px max(24px,calc((100% - 1180px)/2));
        }

        .page-banner p {
            color: #f0a477;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 11px;
            font-weight: 700;
        }

        .page-banner h1 {
            font: bold 34px Georgia,serif;
        }
    `]
})
export class PageBannerComponent {
    @Input() titulo = '';
    @Input() subtitulo = 'Diary Fan';
    @Input() descripcion = '';
}