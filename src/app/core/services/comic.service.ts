import { Injectable } from '@angular/core';
import { Comic } from '../interfaces/comic';

// Permite que Angular pueda inyectar este servicio en otros componentes.
@Injectable({ providedIn: 'root' })
export class ComicService {
  private readonly comics: Comic[] = [
    {
      id: 1, slug: 'ultimate-spider-man', titulo: 'Ultimate Spider-Man #1',
      descripcion: 'Jonathan Hickman y Marco Checchetto traen una nueva visión de Spider-Man.',
      precio: '2,50 €', imagen: 'ultspi.jpg', categoria: 'Superhéroes', editorial: 'Marvel Comics',
      autores: 'Jonathan Hickman y Marco Checchetto', paginas: 48,
      sinopsis: 'Después de los eventos de Ultimate Invasion, el mundo necesita un nuevo héroe. Te presentamos a Peter Parker: esposo, padre y quizá también superhéroe. Una nueva línea de historias para descubrir otra versión del personaje.'
    },
    {
      id: 2, slug: 'all-star-superman', titulo: 'All-Star Superman',
      descripcion: 'Las aventuras épicas del Hombre de Acero en un mundo sin Superman.',
      precio: '9,50 €', imagen: 'superman.jpg', categoria: 'Superhéroes', editorial: 'DC Comics',
      autores: 'Grant Morrison y Frank Quitely', paginas: 148,
      sinopsis: 'Grant Morrison y Frank Quitely narran las últimas semanas del Hombre de Acero. Superman se enfrentará a amenazas alienígenas y a su propio destino en una aventura que reúne grandes elementos del universo del personaje.'
    },
    {
      id: 3, slug: 'dragon-ball-vol-1', titulo: 'Dragon Ball Vol. 1',
      descripcion: 'Las aventuras de Son Goku y sus amigos en busca de las esferas del dragón.',
      precio: '20,50 €', imagen: 'DB_Tankōbon.png', categoria: 'Ciencia ficción', editorial: 'Panini Comics',
      autores: 'Akira Toriyama', paginas: 208,
      sinopsis: 'El primer volumen de Dragon Ball presenta a Son Goku, un niño con cola de mono y una fuerza increíble. Su vida cambia cuando conoce a Bulma, que busca las legendarias Esferas del Dragón, capaces de conceder un deseo.'
    },
    {
      id: 4, slug: 'the-walking-dead', titulo: 'The Walking Dead',
      descripcion: 'Rick Grimes despierta de un coma y descubre un mundo lleno de muertos vivientes.',
      precio: '10,50 €', imagen: 'Dead.jpg', categoria: 'Drama', editorial: 'Panini Comics',
      autores: 'Robert Kirkman', paginas: 208,
      sinopsis: 'Rick Grimes, sheriff de un pueblo de Kentucky, se despierta en un hospital después de estar en coma. El mundo parece abandonado y los muertos vivientes le atacan. Rick emprende la búsqueda de su familia.'
    },
    {
      id: 5, slug: 'sonic-the-hedgehog', titulo: 'Sonic The Hedgehog',
      descripcion: 'Sonic viaja por todo el mundo para detener las fuerzas robóticas de Badnik.',
      precio: '4,99 €', imagen: 'sonic.jpg', categoria: 'Ciencia ficción', editorial: 'IDW',
      autores: 'Ian Flynn', paginas: 108,
      sinopsis: 'Sonic y sus amigos viven en un planeta habitado por animales antropomórficos. Su tranquilidad se ve amenazada por el Dr. Eggman, que quiere conquistar el mundo con su ejército de Badniks.'
    },
    {
      id: 6, slug: 'raising-dion', titulo: 'Raising DION',
      descripcion: 'Nicole Warren, una madre soltera, se queda con su hijo de siete años, Dion.',
      precio: '3,99 €', imagen: 'raising.png', categoria: 'Drama', editorial: 'No especificada',
      autores: 'No especificados', paginas: 0,
      sinopsis: 'La historia comienza en una cabaña en el bosque, donde Nicole Warren, una madre soltera, se queda con su hijo de siete años, Dion Warren.'
    },
    {
      id: 7, slug: 'lonely-receiver', titulo: 'Lonely Receiver',
      descripcion: 'Una historia de terror y ruptura ambientada en un futuro de colores pastel.',
      precio: '7,99 €', imagen: 'Lonely+Receiver.jpg', categoria: 'Drama', editorial: 'No especificada',
      autores: 'No especificados', paginas: 0,
      sinopsis: 'Ambientada en un nuevo futuro, bañada por los colores pastel y el sol, Lonely Receiver es una historia de terror y ruptura contada en cinco partes.'
    },
    {
      id: 8, slug: 'avatar-the-last-airbender', titulo: 'Avatar: The Last Airbender',
      descripcion: 'Una continuación del universo de la serie animada de Nickelodeon.',
      precio: '5,99 €', imagen: 'avatar.jpg', categoria: 'Ciencia ficción', editorial: 'No especificada',
      autores: 'No especificados', paginas: 0,
      sinopsis: 'Avatar: la leyenda de Aang continúa el universo de la serie animada del mismo nombre de Nickelodeon.'
    },
    {
      id: 9, slug: 'mortadelo-y-filemon', titulo: 'Mortadelo y Filemón',
      descripcion: 'La morcilla o ¡Silencio, se rueda acción!', precio: '7,50 €', imagen: 'morta.jpg',
      categoria: 'Humor', editorial: 'No especificada', autores: 'No especificados', paginas: 0,
      sinopsis: 'La verdadera historia de Mortadelo y Filemón, con sus aventuras y situaciones disparatadas.'
    },
    {
      id: 10, slug: 'rick-y-morty', titulo: 'Rick y Morty: La saga del batido espacial',
      descripcion: 'Rick, Morty y todas las realidades se enfrentan al poder de las matemáticas.',
      precio: '4,50 €', imagen: 'rick.jpg', categoria: 'Humor', editorial: 'No especificada',
      autores: 'No especificados', paginas: 0,
      sinopsis: 'Rick, Morty y todas las realidades se enfrentan al opresivo poder de las matemáticas, y puede que Rick nunca consiga el batido ideal.'
    },
    {
      id: 11, slug: 'asterix-el-galo', titulo: 'Astérix el Galo',
      descripcion: 'El mítico héroe galo creado por Goscinny y Uderzo.', precio: '17,50 €', imagen: 'asterix.jpg',
      categoria: 'Humor', editorial: 'No especificada', autores: 'Goscinny y Uderzo', paginas: 0,
      sinopsis: 'Astérix, el mítico héroe galo creado por los famosos Goscinny y Uderzo, vive nuevas aventuras junto a sus amigos.'
    },
    {
      id: 12, slug: 'los-picapiedra', titulo: 'Los Picapiedra',
      descripcion: 'Una versión moderna y oscuramente hilarante de la serie de animación.',
      precio: '3,50 €', imagen: 'pica.jpg', categoria: 'Humor', editorial: 'No especificada',
      autores: 'No especificados', paginas: 0,
      sinopsis: 'Esta versión moderna de la icónica serie de animación de Hanna-Barbera tiene un humor oscuro y situaciones inesperadas.'
    },
    {
      id: 13, slug: 'con-l-de-novata', titulo: 'Con L de novata',
      descripcion: 'Maestra de pueblo, la profe más popular de internet, nos cuenta sus inicios.',
      precio: '10,00 €', imagen: 'maestro.jpg', categoria: 'Humor', editorial: 'No especificada',
      autores: 'Maestra de pueblo', paginas: 0,
      sinopsis: 'Maestra de pueblo, la profe más popular de internet, nos cuenta sus inicios.'
    }
  ];

  obtenerTodos(): Comic[] { return this.comics; }
  obtenerNovedades(): Comic[] { return this.comics.slice(0, 8); }
  obtenerHumor(): Comic[] { return this.comics.filter(comic => comic.categoria === 'Humor'); }
  obtenerPorSlug(slug: string): Comic | undefined { return this.comics.find(comic => comic.slug === slug); }

  buscar(texto: string): Comic[] {
    const busqueda = texto.toLowerCase().trim();

    if (!busqueda) return this.obtenerTodos();
    
    return this.comics.filter(comic =>
      comic.titulo.toLowerCase().includes(busqueda) || comic.categoria.toLowerCase().includes(busqueda)
    );
  }
}
