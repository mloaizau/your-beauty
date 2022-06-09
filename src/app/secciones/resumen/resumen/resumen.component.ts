import { Component, OnInit, ViewChild } from '@angular/core';
import { SessionService } from "../../../services/session.service";
import { IonSlides } from '@ionic/angular';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resumen',
  templateUrl: 'resumen.component.html',
  styleUrls: ['resumen.component.scss']
})
export class ResumenPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  public session: any;
  public producto: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

  constructor(
    private _session: SessionService,
    private _storeService: StoreService,
    private router: Router
  ) {
  }

  ngOnInit(){
    this.obtenerSession();
  }

  async obtenerSession(){
    this.session = await this._session.get("sessionActive");
  }

  async ionViewWillEnter(){
    if(!this.session){
      this.obtenerSession();
    }
    this.producto = await this._storeService.getID("7");
    console.log(this.producto[0].nombre);
  }
  filtroMarca(marca){
      this.router.navigate(['/home/tabs/ofertas'], { queryParams: {marca: marca} });
  }
}
