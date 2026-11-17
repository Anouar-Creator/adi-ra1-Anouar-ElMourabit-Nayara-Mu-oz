// Define la estructura de los datos que se utilizan en el proyecto.
export interface Comic {
  id: number;
  slug: string;
  titulo: string;
  descripcion: string;
  precio: string;
  imagen: string;
  categoria: string;
  editorial: string;
  autores: string;
  paginas: number;
  sinopsis: string;
}
