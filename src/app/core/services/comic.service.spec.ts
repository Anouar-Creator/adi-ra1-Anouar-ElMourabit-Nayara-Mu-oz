import { TestBed } from '@angular/core/testing';
import { ComicService } from './comic.service';

describe('ComicService', () => {
  let service: ComicService;
  beforeEach(() => { TestBed.configureTestingModule({}); service = TestBed.inject(ComicService); });
  it('devuelve el catálogo de cómics', () => { expect(service.obtenerTodos().length).toBeGreaterThan(0); });
  it('filtra los cómics de humor', () => { expect(service.obtenerHumor().every(comic => comic.categoria === 'Humor')).toBe(true); });
  it('busca por título', () => { expect(service.buscar('Spider-Man')[0]?.titulo).toContain('Spider-Man'); });
});
