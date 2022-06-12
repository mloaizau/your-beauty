import { Component, OnInit } from '@angular/core';
import { ChildActivationStart, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  public session: any;

  constructor(
    public menuCtrl: MenuController,
    private _session: SessionService,
    private route: Router
  ) { }

  ngOnInit() {
    this.obtenerSesion();
  }

  async obtenerSesion(){
    this.session = await this._session.get('sessionActive');

  }

  cerrarSesion(){
    this._session.remove("sessionActive");
    this.obtenerSesion();
  }

  ionViewWillEnter() {
    if (!this.session) {
      this.obtenerSesion();
    }
  }

  goTo(ruta){
    this.route.navigate(["/home/tabs/retiro"], { queryParams: {ruta: ruta} });
  }
}
