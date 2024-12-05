import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private httpclient: HttpClient) {}

  public getAll() {
    return this.httpclient.get('https://pokeapi.co/api/v2/pokemon'); //get
  }

  public getPokemon(url: string) {
    return this.httpclient.get(url);
  }
}
