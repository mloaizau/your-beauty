import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoProvider {
  carrito = [];

  constructor() {}

  addItem(item) {
    this.carrito.push(item);
    console.log(this.carrito);
  }

  removeItem(id){
    // this.carrito.splice()
  }

  getCart(){
    console.log(this.carrito);
    return this.carrito;
  }
}
