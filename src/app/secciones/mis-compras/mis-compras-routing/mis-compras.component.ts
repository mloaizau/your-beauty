import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.scss'],
})
export class MisComprasComponent implements OnInit {

  session: any;
  compras: any;

  constructor(
    private _session: SessionService
  ) { }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.session = await this._session.get('sessionActive');
    this.compras = this.session.historial;
  }
}
