import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public pokemon: IPokemon | null = null;
  public tipos: string[] = [];
  public errorMessage: string = '';
  public nextUrl: string | null = null;
  public previousUrl: string | null = null;
  public isloading: boolean = false;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener la URL del Pokémon desde los parámetros de consulta
    this.route.queryParams.subscribe((params) => {
      const url = params['url'];
      if (url) {
        this.buscarPokemon(url);
      }
    });
  }

  public buscarPokemon(url: string): void {
    this.isloading = true;
    this.restService
      .getPokemon(url) // Obtener el Pokémon desde la URL
      .subscribe({
        next: (data: IPokemon) => {
          this.pokemon = data;

          //Almacenar los tipos en un array de strings
          this.tipos = this.pokemon?.types.map((type) => type.type.name) || [];

          this.errorMessage = '';

          this.previousUrl =
            this.pokemon?.id > 1
              ? `https://pokeapi.co/api/v2/pokemon/${this.pokemon.id - 1}`
              : null;

          this.nextUrl = `https://pokeapi.co/api/v2/pokemon/${
            this.pokemon.id + 1
          }`;

          setTimeout(() => {
            this.isloading = false;
          }, 800); // 1000 milisegundos = 1 segundo
        },
        error: () => {
          this.errorMessage = 'Pokémon no encontrado. Intenta con otro nombre.';
          this.pokemon = null;
          setTimeout(() => {
            this.isloading = false;
          }, 800); // 1000 milisegundos = 1 segundo
        },
      });
  }

  // Método para actualizar la URL
  public actualizarUrl(url: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { url: url },
      queryParamsHandling: 'merge', // Mantener otros parámetros en la URL
    });
  }

  // Función para ir al Pokémon anterior
  public irAlAnterior(): void {
    if (this.previousUrl) {
      this.actualizarUrl(this.previousUrl);
      this.buscarPokemon(this.previousUrl); // Buscar el Pokémon anterior
    }
  }

  // Función para ir al Pokémon siguiente
  public irAlSiguiente(): void {
    if (this.nextUrl) {
      this.actualizarUrl(this.nextUrl);
      this.buscarPokemon(this.nextUrl); // Buscar el Pokémon siguiente
    }
  }
}
