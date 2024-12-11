# PokeApiAngular12
Este proyecto se ha hecho con la finalidad de poner en práctica los conocimientos adquiridos de Angular 12.
Hace uso de la [PokeApi](https://pokeapi.co) para la exposición de sus datos.

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Components

Los componentes se encuentran en la carpeta /components.
Existen los componentes header, home y details.

### Header
      Contiene la cabecera del proyecto junto con un buscador con la funcionalidad de autocompletado
### Home
      Página principal del proyecto dónde se listan los resultados.
### Details
      Página de detalle de Pokemons dónde se muestran sus datos.

## Services

Los servicios se encuentran en la carpeta /services.
Existen los servicios Rest y Autocomplete, utilizados para hacer las llamadas a la API y autocompletar las busquedas.

##Interfaces

Las interfaces/modelos se encuentran en la carpeta /models.
Ahí se encuentran las interfaces de los resultados que se obtienen en los distintos endpoints de la API

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
