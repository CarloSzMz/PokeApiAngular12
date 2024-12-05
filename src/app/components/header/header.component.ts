import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
  public pokemonName: string = ''; // Variable para guardar el nombre del Pokémon

  ngOnInit(): void {}
  public buscarPokemon() {
    if (this.pokemonName.trim()) {
      // Navegar a la ruta existente 'details/:id'
      this.router.navigate(['/details', this.pokemonName.trim().toLowerCase()]);
      this.pokemonName = ''; //Vacia el buscador
    }
  }
}
