import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoProvider } from 'src/app/providers/carrito.provider';
import { StoreService } from 'src/app/services/store.service';

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
    private _storeService: StoreService,
    private route: ActivatedRoute,
    private cart: CarritoProvider
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.route.queryParams.subscribe((respuesta) => {
      this.params = respuesta;
    });
    this.producto = await this._storeService.getID(this.params.id);
    this.count = this.cart.getCantidad();
    console.log(this.producto);
  }

  addToCar(producto){
    this.cart.addItem(producto);
    this.count = this.cart.getCantidad();
  }
}
