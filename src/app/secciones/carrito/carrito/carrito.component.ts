import { Component, OnInit } from '@angular/core';
import { CarritoProvider } from '../../../providers/carrito.provider';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {

  private carritoCompra = [];
  total: any = 0;
  constructor(
    private cart: CarritoProvider
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.buscarCarrito();
  }

  buscarCarrito(){
    this.carritoCompra = Object.assign({}, this.cart.getCart());
    this.carritoCompra = Object.values(this.carritoCompra);
    this.sumarTotal();
  }

  sumarTotal(){
    this.total = 0;
    for (let index = 0; index < this.carritoCompra.length; index++) {
      let precio = this.carritoCompra[index].totalItem.replace('.', '');
      this.total += parseInt(precio);
    }
    this.total = this.total.toString().substring(0, this.total.toString().length - 3) + "." + this.total.toString().substring(this.total.toString().length - 3,  this.total.toString().length);
  }

  ionViewWillLeave(){
    this.total = 0;
    this.carritoCompra = [];
  }

  quitarItem(item){
    this.cart.removeItem(item);
    this.buscarCarrito();
  }

}
