import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAllPokemon, Result } from 'src/app/models/allPokemon.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public lista: Result[] = []; // Lista de Pokémon
  public totalCount: number = 0; // Total de Pokémon disponibles
  public nextUrl: string | null = null; // URL para la siguiente página
  public prevUrl: string | null = null; // URL para la página anterior
  public loading: boolean = true;
  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.cargarDatos('');
  }

  public cargarDatos(url: string): void {
    this.loading = true;
    this.restService
      .getAll(url || `${this.restService.baseURL}?limit=9&offset=0`)
      .subscribe((respuesta: IAllPokemon) => {
        this.lista = respuesta.results;
        this.totalCount = respuesta.count;
        this.nextUrl = respuesta.next; // URL para la siguiente página
        this.prevUrl = respuesta.previous; // URL para la página anterior
        this.cargarImagenes(this.lista);
      });
  }

  public cargarImagenes(lista: any[]) {
    const requests = lista.map((pokemon) =>
      this.restService
        .getPokemon(pokemon.url)
        .toPromise()
        .then((response) => {
          pokemon.image = response.sprites.front_default; // Asigna la imagen
        })
    );

    Promise.all(requests).then(() => {
      setTimeout(() => {
        this.loading = false;
      }, 500); // Mantener la animación de carga visible brevemente
    });
  }

  public detalles(url: string) {
    this.router.navigate(['/details'], { queryParams: { url } });
  }

  public paginaAnterior(): void {
    if (this.prevUrl) {
      this.cargarDatos(this.prevUrl);
    }
  }

  public paginaSiguiente(): void {
    if (this.nextUrl) {
      this.cargarDatos(this.nextUrl);
    }
  }
}
