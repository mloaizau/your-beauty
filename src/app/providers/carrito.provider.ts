import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoProvider {
  carrito = [];

  constructor( ) { }

  addItem(item) {
    let bool = false;
    this.carrito.forEach((object) => {
      if(item.id == object.id){
        bool = true;
        object.cantidad++;
        let precio = item.precio.replace('.', '');
        let total = precio * object.cantidad;
        let format = total.toString().substring(0, total.toString().length - 3) + "." + total.toString().substring(total.toString().length - 3,  total.toString().length);
        object.totalItem = format;
      }
    });
    if(!bool){
      item.cantidad = 1;
      item.totalItem = item.precio;
      this.carrito.push(item);
    }
  }

  removeItem(item){
    if(item.cantidad > 1){
      this.carrito.forEach((object) => {
        if(item.id == object.id){
          object.cantidad--;
          let precio = item.precio.replace('.', '');
          let total = precio * object.cantidad;
          let format = total.toString().substring(0, total.toString().length - 3) + "." + total.toString().substring(total.toString().length - 3,  total.toString().length);
          object.totalItem = format;
        }
      });
    }else{
      const itemEliminar = item.id;
      const index = this.carrito.findIndex( x => x.id === itemEliminar );
      this.carrito.splice( index, 1 );
    }

    console.log(this.carrito);
  }

  getCart(){
    return this.carrito;
  }

  getCantidad(){
    if(this.carrito.length == 0){
      return 0;
    }
    else{
      let cantidad = 0;
      for (let index = 0; index < this.carrito.length; index++) {
        cantidad += this.carrito[index].cantidad;
      }
      return cantidad;
    }
  }

}
