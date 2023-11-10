# Mayoral Frontend Assignment

|  Desktop | Mobile |
|:--------:|:------:|
| ![Desktop](./.github/desktop.png) | ![Mobile](./.github/mobile.png)  |

Maquetar las imágenes adjuntas y tener en cuenta los diferentes cortes en móvil y escritorio. La prueba deberá estar subida en un repositorio de GitHub.

Tecnologías/Librerías requeridas:

-	React
-	Typescript
-	Next.js

Funcionalidad a implementar:

- Separa en componentes de una forma óptima y organizada
- La vista debe asemejarse lo más parecido posible a las fotos adjuntas
- Implementar búsqueda de productos por nombre
- Consumir un JSON con los datos de productos (JSON local o externo)
- Cambiar la vista con los iconos indicados en la foto: 
  - Escritorio de 4 a 3 elementos
  - Móvil de 3 a 2 elementos
- Implementar lógica y diseño de un componente “ordenar” (precio ascendente y descendente)
- Crea los test unitarios que creas conveniente

---

# Decisiones

## Estructura

Se ha utilizado una estructura *folder by feature* para organizar el código. Esto permite que cada componente tenga su propio directorio con sus estilos, tests, etc. Esto facilita la escalabilidad del proyecto.

## Estrategia de renderizado

Se ha utilizado ISR (Incremental Static Regeneration) para renderizar las páginas. Esto permite que las páginas se rendericen de forma estática y se actualicen cada 1 minuto. Esto mejora el rendimiento de la aplicación, la experiencia de usuario, reduce el consumo de recursos, y mejora el SEO.

## Estilos

Se ha utilizado CSS Modules para los estilos. Esto permite que los estilos sean locales al componente y no se mezclen con otros componentes.

## Tests

Se han creado tests unitarios para los componentes.