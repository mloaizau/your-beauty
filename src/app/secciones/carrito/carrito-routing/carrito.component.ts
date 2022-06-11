import { Component, OnInit } from '@angular/core';
import { CarritoProvider } from '../../../providers/carrito.provider';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {

  carrito = [];
  hayitems: any;
  constructor(
    private cart: CarritoProvider
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.carrito = this.cart.getCart();
    console.log(this.carrito);
  }

}
