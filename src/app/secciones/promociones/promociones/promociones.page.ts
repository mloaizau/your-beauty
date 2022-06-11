import { Component, Directive, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoProvider } from 'src/app/providers/carrito.provider';
import { StoreService } from '../../../services/store.service';

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
    private _storeService: StoreService,
    private route: ActivatedRoute,
    private cart: CarritoProvider,
    private router: Router
  ) {
    this.route.queryParams.subscribe(respuesta => {
      this.params = respuesta;
    });
    this.count = this.cart.getCart().length;
  }

  async getStore(){
    if(this.params.marca){
      this.productos = await this._storeService.getMarca(this.params.marca);
    }else if(this.params.categoria){
      this.productos = await this._storeService.getCategoria(this.params.categoria);
    }
    else{
      this.productos = await this._storeService.getStore();
    }
  }

  async ionViewWillEnter(){
      this.count = this.cart.getCantidad();
      this.getStore();
  }

  addToCar(producto){
    this.cart.addItem(producto);
    this.count = this.cart.getCantidad();
  }

  goDetails(id){
    this.router.navigate(["/home/tabs/detalle"], { queryParams: {id: id} });
  }
}
