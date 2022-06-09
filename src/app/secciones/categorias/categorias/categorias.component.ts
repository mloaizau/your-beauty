import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  public categorias: any;

  constructor(
    private storeService: StoreService
  ) {
  }

  ngOnInit() {
    this.getCategorias()
  }

  async getCategorias(){
    this.categorias = await this.storeService.getCategorias();
  }
}
