import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  public categorias: any;

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getCategorias()
  }

  async getCategorias(){
    this.categorias = await this.storeService.getCategorias();
  }

  irCategoria(nombre){
    console.log(nombre);
    this.router.navigate(['/home/tabs/ofertas'], { queryParams: {categoria: nombre} });
  }
}
