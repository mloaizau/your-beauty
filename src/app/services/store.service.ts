import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getStore(){
    return new Promise((resolve, reject) => {
      const url = 'https://cosmetic-store-dev.herokuapp.com/productos';
      this.httpClient.get(url).subscribe(data => {
        console.log(data);
        resolve(data)
      });
    });
  }

  getMarca(marca: string){
    return new Promise((resolve, reject) => {
      const url = 'https://cosmetic-store-dev.herokuapp.com/productos?marca='+marca;
      this.httpClient.get(url).subscribe(data => {
        console.log(data);
        resolve(data)
      });
    });
  }

  getCategorias(){
    return new Promise((resolve, reject) => {
      const url = 'https://cosmetic-store-dev.herokuapp.com/categorias';
      this.httpClient.get(url).subscribe(data => {
        console.log(data);
        resolve(data)
      });
    });
  }
}
