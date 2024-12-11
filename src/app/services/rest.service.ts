import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemon } from '../models/pokemon.model';
import { IAllPokemon } from '../models/allPokemon.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private httpclient: HttpClient) {}
  public baseURL = `https://pokeapi.co/api/v2/pokemon`;

  public getAll(url: string): Observable<IAllPokemon> {
    return this.httpclient.get<IAllPokemon>(url);
  }

  public getPokemon(urlPokemon: string): Observable<IPokemon> {
    return this.httpclient.get<IPokemon>(`${urlPokemon}`);
  }
}
