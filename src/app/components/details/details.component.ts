import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private restService: RestService) {}
  public pokemon: any;
  ngOnInit(): void {
    this.pokemon = this.restService.selectedPokemon;
    console.log(this.pokemon);
  }
}
