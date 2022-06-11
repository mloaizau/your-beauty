import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayuda',
  templateUrl: 'ayuda.page.html',
  styleUrls: ['ayuda.page.scss']
})
export class AyudaPage {

  constructor(
    private router: Router
  ) {}

  goTo(ruta){
    this.router.navigate(["/home/tabs/retiro"], { queryParams: {ruta: ruta} });
  }

}
