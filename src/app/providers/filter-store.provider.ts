import { Injectable } from '@angular/core';
import { StoreFakeGithubService } from '../services/store-fake-github.service';
import { map } from 'lodash';

@Injectable({
  providedIn: 'root',
})


export class FilterStoreProvider {

  constructor(
    private _storeFakeService: StoreFakeGithubService
  ) { }

  public async filterId(id: number) {
    const x: any = await this._storeFakeService.getID(id);
    id = Number(id);
    const found = x.productos.find((element) => element.id === id);
    return found;
  }

  public async filterMarca(marca: string) {
    const x: any = await this._storeFakeService.getMarca(marca);
    const found = x.productos.filter(producto => marca.includes(producto.marca));
    return found;
  }

  public async filterCategoria(categoria: string) {
    const x: any = await this._storeFakeService.getCategoria(categoria);
    const found = x.productos.filter(producto => categoria.includes(producto.categoria));
    return found;
  }

}
