import { Component, Directive, Input } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-promo',
  templateUrl: 'promociones.page.html',
  styleUrls: ['promociones.page.scss']
})
export class PromocionesPage {

  public productos: any;
  public producto = [];

  constructor(
    private _storeService: StoreService
  ) { }

  async getStore(){
    this.productos = await this._storeService.getStore();
    // for (let i = 0; i < this.productos.length; i++){
    //   this.producto.push(this.productos[i]);
    // };
    console.log(this.productos);
  }

  async ionViewWillEnter(){
    if(!this.productos){
      this.getStore();
    }
  }


}
