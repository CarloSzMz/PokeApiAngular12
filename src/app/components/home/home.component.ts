import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public lista: any = [];
  public respuesta: any = [];
  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    this.cargarDatos();
  }
  public cargarDatos() {
    this.restService.getAll().subscribe((respuesta: any) => {
      this.lista = (
        respuesta as { results: Array<{ name: string; url: string }> }
      ).results;
    });
  }

  public detalles(url: string) {
    const id = url
      .split('/')
      .filter((segment) => segment)
      .pop(); // Obtener el ID del URL
    this.router.navigate(['/details', id]);
  }
}
