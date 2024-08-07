import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { CarritoProvider } from '../../../providers/carrito.provider';
import { FilterStoreProvider } from 'src/app/providers/filter-store.provider';
import { Utils } from 'src/app/utils/utils';
@Component({
  selector: 'app-resumen',
  templateUrl: 'resumen.component.html',
  styleUrls: ['resumen.component.scss'],
})
export class ResumenPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public session: any;
  public producto: any;
  public count: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };

  constructor(
    private _session: SessionService,
    private _router: Router,
    private _cart: CarritoProvider,
    private _filterProvider: FilterStoreProvider,
    private _utils: Utils
  ) {
    this.count = this._cart.getCart().length;
  }

  ngOnInit() {
    this.obtenerSession();
  }

  async obtenerSession() {
    this.session = await this._session.get('sessionActive');
  }

  async ionViewWillEnter() {
    if (!this.session) {
      this.obtenerSession();
    }
    const randomId = this._utils.getRandomInt();
    this.producto = await this._filterProvider.filterId(randomId);
    this.count = this._cart.getCantidad();
  }

  filtroMarca(marca) {
    this._router.navigate(['/home/tabs/ofertas'], {
      queryParams: { marca: marca },
    });
  }

  goCategories() {
    this._router.navigate(['/home/tabs/categoria']);
  }

  addToCar(item) {
    this._cart.addItem(item);
    this.count = this._cart.getCantidad();
  }

  goDetails(id) {
    this._router.navigate(["/home/tabs/detalle"], { queryParams: { id } });
  }

}
