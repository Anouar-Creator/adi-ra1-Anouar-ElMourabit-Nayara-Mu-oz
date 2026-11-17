# Diary Fan (Nuestar pagina de comics) - Proyecto Angular de Anouar y Nayara

## Estructura principal
- `core/interfaces`: modelo de datos `Comic`.
- `core/services`: servicio que proporciona y filtra el catálogo.
- `features`: páginas Inicio, Catálogo, Humor, Quiénes somos, Contactos y ficha del cómic. Se conserva el acceso y el registro del proyecto base hecho en clase.

- `shared/components`: tarjeta de cómic, cabecera de página, enlaces de redes y etiqueta de precio.
- `public/imagenes`: imágenes recuperadas del proyecto original de Diary Fan.

## Rutas
- `/home`: página principal.
- `/catalogo`: catálogo con búsqueda por título o categoría.
- `/humor`: cómics de humor.
- `/quienes-somos`: información y alianzas.
- `/contactos`: formulario de contacto con validación básica.
- `/comic/:slug`: ficha individual del cómic.
- `/login` y `/registro`: acceso y registro con validaciones de formulario.


