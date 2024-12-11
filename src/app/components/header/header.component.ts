import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonAutocompleteService } from 'src/app/services/pokemon-autocomplete.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private autocompleteService: PokemonAutocompleteService
  ) {}
  public pokemonName: string = ''; // Variable para guardar el nombre del Pokémon
  public pokemonSuggestions: string[] = []; // Sugerencias de Pokémon

  ngOnInit(): void {}

  public buscarPokemon() {
    if (this.pokemonName.trim()) {
      const pokemonNameUrl = this.pokemonName.trim().toLowerCase();
      // Construimos la URL completa para el Pokémon
      const pokemonApiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameUrl}`;

      // Actualizamos la URL de la página con el parámetro 'url'
      this.router.navigate(['details'], {
        queryParams: { url: pokemonApiUrl }, // Usamos la URL completa de la API de Pokémon
        queryParamsHandling: 'merge', // Mantener otros parámetros existentes en la URL
      });

      this.pokemonName = ''; //Vacia el buscador
      this.pokemonSuggestions = []; // Borra las sugerencias
    }
  }

  // Método para buscar sugerencias mientras el usuario escribe
  public obtenerSugerencias(): void {
    if (this.pokemonName.trim().length > 0) {
      this.autocompleteService
        .searchPokemon(this.pokemonName)
        .subscribe((data) => {
          // Filtrar las sugerencias que coinciden con la búsqueda
          this.pokemonSuggestions = data.results
            .map((pokemon: { name: string }) => pokemon.name)
            .filter((name: string) =>
              name.startsWith(this.pokemonName.toLowerCase())
            );
        });
    } else {
      this.pokemonSuggestions = []; // Si el campo está vacío, borrar las sugerencias
    }
  }

  // Método para seleccionar un Pokémon de las sugerencias
  public seleccionarPokemon(pokemonNameInput: string): void {
    this.pokemonName = pokemonNameInput;
    this.buscarPokemon();
  }
}
