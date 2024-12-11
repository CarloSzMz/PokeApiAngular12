import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonAutocompleteService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1025';

  constructor(private httpClient: HttpClient) {}


  searchPokemon(query: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}&offset=0`);
  }
}
