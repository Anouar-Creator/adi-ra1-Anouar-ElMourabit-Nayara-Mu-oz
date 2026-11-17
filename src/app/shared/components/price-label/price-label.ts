import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-price-label',
    standalone: true,
    template: '<span class="precio">{{ precio }}</span>',
    styles: [`
        .precio {
            display: inline-block;
            color: #a64b2a;
            font-size: 20px;
            font-weight: 800;
            font-family: Georgia,serif;
        }
    `]
})
export class PriceLabelComponent {
    @Input() precio = '';
}