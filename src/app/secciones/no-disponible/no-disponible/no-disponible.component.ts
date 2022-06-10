import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-no-disponible',
  templateUrl: './no-disponible.component.html',
  styleUrls: ['./no-disponible.component.scss'],
})
export class NoDisponibleComponent implements OnInit {

  public params: any;
  constructor(
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(respuesta => {
      this.params = respuesta;
    });
   }

  ngOnInit() {}

}
