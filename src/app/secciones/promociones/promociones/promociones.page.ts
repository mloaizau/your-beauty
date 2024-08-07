import { Component, Directive, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoProvider } from 'src/app/providers/carrito.provider';
import { StoreFakeGithubService } from 'src/app/services/store-fake-github.service';
import { FilterStoreProvider } from 'src/app/providers/filter-store.provider';

@Component({
  selector: 'app-promo',
  templateUrl: 'promociones.page.html',
  styleUrls: ['promociones.page.scss']
})
export class PromocionesPage {

  public productos: any;
  public producto = [];
  public params: any;
  public count: any;

  constructor(
    private _storeService: StoreFakeGithubService,
    private _activatedRoute: ActivatedRoute,
    private _cart: CarritoProvider,
    private _router: Router,
    private _filterStoreProvider: FilterStoreProvider
  ) {
    this._activatedRoute.queryParams.subscribe(respuesta => {
      this.params = respuesta;
    });
    this.count = this._cart.getCart().length;
  }

  async getStore() {
    if (this.params.marca) {
      this.productos = await this._filterStoreProvider.filterMarca(this.params.marca);
    } else if (this.params.categoria) {
      this.productos = await this._filterStoreProvider.filterCategoria(this.params.categoria);
    } else {
      let x: any = await this._storeService.getStore();
      this.productos = x.productos;
    }
  }

  async ionViewWillEnter() {
    this.count = this._cart.getCantidad();
    this.getStore();
  }

  addToCar(producto) {
    this._cart.addItem(producto);
    this.count = this._cart.getCantidad();
  }

  goDetails(id) {
    this._router.navigate(["/home/tabs/detalle"], { queryParams: { id: id } });
  }
}
