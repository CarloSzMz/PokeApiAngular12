import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  public pokemon: any;
  public tipos: any;
  public errorMessage: string = '';
  public idAnterior: any;
  public idPosterior: any;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Escuchar cambios en los parámetros de la URL
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id'); // Obtener el ID o nombre desde la URL
      if (id) {
        this.buscarPokemon(id);
      }
    });
  }

  public buscarPokemon(id: string): void {
    this.restService
      .getPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .subscribe({
        next: (data) => {
          this.pokemon = data;
          this.tipos = this.pokemon?.types;
          this.errorMessage = '';
          this.idAnterior = this.pokemon.id - 1;
          this.idPosterior = this.pokemon.id + 1;
          //console.log(this.pokemon);
          //console.log(this.tipos);
        },
        error: () => {
          this.errorMessage = 'Pokémon no encontrado. Intenta con otro nombre.';
          this.pokemon = null;
        },
      });
  }
}
