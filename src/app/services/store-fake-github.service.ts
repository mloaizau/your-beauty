import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreFakeGithubService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getStore(){
    return new Promise((resolve, reject) => {
      const url = 'https://mloaizau.github.io/API_FAKE/productos.json';
      this.httpClient.get(url).subscribe(data => {
        resolve(data)
      });
    });
  }

  getMarca(marca: string){
    return new Promise((resolve, reject) => {
      const url = 'https://mloaizau.github.io/API_FAKE/productos.json?marca='+marca;
      this.httpClient.get(url).subscribe(data => {
        resolve(data)
      });
    });
  }

  getCategorias(){
    return new Promise((resolve, reject) => {
      const url = 'https://mloaizau.github.io/API_FAKE/categorias.json';
      this.httpClient.get(url).subscribe(data => {
        resolve(data)
      });
    });
  }

  getCategoria(category: string){
    return new Promise((resolve, reject) => {
      const url = 'https://mloaizau.github.io/API_FAKE/productos.json?categoria='+category;
      this.httpClient.get(url).subscribe(data => {
        resolve(data)
      });
    });
  }

  getID(id: number) {
    return new Promise((resolve, reject) => {
      const url = 'https://mloaizau.github.io/API_FAKE/productos.json?id='+id;
      this.httpClient.get(url).subscribe(data => {
        resolve(data)
      });
    });
  }
}
