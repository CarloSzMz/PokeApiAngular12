import { TestBed } from '@angular/core/testing';

import { PokemonAutocompleteService } from './pokemon-autocomplete.service';

describe('PokemonAutocompleteService', () => {
  let service: PokemonAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
