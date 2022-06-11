import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { IonSlides, NavController } from '@ionic/angular';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { CarritoProvider } from '../../../providers/carrito.provider';
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
    private _storeService: StoreService,
    private router: Router,
    private cart: CarritoProvider
  ) {
    this.count = this.cart.getCart().length;
    console.log(this.count);
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
    this.producto = await this._storeService.getID('7');
    this.count = this.cart.getCantidad();
  }
  filtroMarca(marca) {
    this.router.navigate(['/home/tabs/ofertas'], {
      queryParams: { marca: marca },
    });
  }
  goCategories() {
    this.router.navigate(['/home/tabs/categoria']);
  }

  addToCar(item){
    this.cart.addItem(item);
    this.count = this.cart.getCantidad();
  }
}
