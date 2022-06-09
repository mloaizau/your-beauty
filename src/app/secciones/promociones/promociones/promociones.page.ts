import { Component, Directive, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private _storeService: StoreService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(respuesta => {
      this.params = respuesta;
    });
  }

  async getStore(){
    if(this.params.marca){
      this.productos = await this._storeService.getMarca(this.params.marca);
    }else{
      this.productos = await this._storeService.getStore();
    }
  }

  async ionViewWillEnter(){
      this.getStore();
  }

}
