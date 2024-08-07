import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoProvider } from 'src/app/providers/carrito.provider';
import { StoreFakeGithubService } from 'src/app/services/store-fake-github.service';
import { FilterStoreProvider } from 'src/app/providers/filter-store.provider';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  public params: any;
  public producto: any;
  public count = 0;

  constructor(
    private _storeService: StoreFakeGithubService,
    private _activatedRoute: ActivatedRoute,
    private _cart: CarritoProvider,
    private _filterStoreProvider: FilterStoreProvider
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this._activatedRoute.queryParams.subscribe((respuesta) => {
      this.params = respuesta;
    });
    this.producto = await this._filterStoreProvider.filterId(this.params.id);
    this.count = this._cart.getCantidad();
  }

  addToCar(producto) {
    this._cart.addItem(producto);
    this.count = this._cart.getCantidad();
  }
}
