import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './features/login/login';
import { CatalogoComponent } from './features/catalogo/catalogo';
import { HumorComponent } from './features/humor/humor';
import { QuienesSomosComponent } from './features/quienes-somos/quienes-somos';
import { ContactosComponent } from './features/contactos/contactos';
import { ComicDetailComponent } from './features/comic-detail/comic-detail';

// define las direcciones de las páginas y el componente que se abre en cada una.
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Diary Fan | Inicio' },
  { path: 'catalogo', component: CatalogoComponent, title: 'Diary Fan | Catálogo' },
  { path: 'humor', component: HumorComponent, title: 'Diary Fan | Humor' },
  { path: 'quienes-somos', component: QuienesSomosComponent, title: 'Diary Fan | Quiénes somos' },
  { path: 'contactos', component: ContactosComponent, title: 'Diary Fan | Contactos' },
  { path: 'comic/:slug', component: ComicDetailComponent, title: 'Diary Fan | Ficha del cómic' },
  { path: 'login', component: Login, data: { modo: 'login' }, title: 'Diary Fan | Iniciar sesión' },
  { path: 'registro', component: Login, data: { modo: 'registro' }, title: 'Diary Fan | Registro' },
  { path: '**', redirectTo: 'home' }
];
