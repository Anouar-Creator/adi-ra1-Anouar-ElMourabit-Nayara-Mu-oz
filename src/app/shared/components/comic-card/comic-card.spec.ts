import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ComicCardComponent } from './comic-card';
import { Comic } from '../../../core/interfaces/comic';

describe('ComicCardComponent', () => {
  let fixture: ComponentFixture<ComicCardComponent>;
  const comic: Comic = { id: 1, slug: 'prueba', titulo: 'Cómic de prueba', descripcion: 'Descripción', precio: '5,00 €', imagen: 'prueba.jpg', categoria: 'Humor', editorial: 'Editorial', autores: 'Autor', paginas: 20, sinopsis: 'Sinopsis' };
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ComicCardComponent], providers: [provideRouter([])] }).compileComponents();
    fixture = TestBed.createComponent(ComicCardComponent);
    fixture.componentRef.setInput('comic', comic);
    await fixture.whenStable();
  });
  it('muestra el título recibido por Input', () => {
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Cómic de prueba');
  });
  it('emite el cómic cuando se selecciona', () => {
    let seleccionado: Comic | undefined;
    fixture.componentInstance.seleccionado.subscribe(valor => seleccionado = valor);
    fixture.componentInstance.seleccionar();
    expect(seleccionado).toEqual(comic);
  });
});
