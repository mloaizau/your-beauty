import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
@Component({
  selector: 'app-no-disponible',
  templateUrl: './no-disponible.component.html',
  styleUrls: ['./no-disponible.component.scss'],
})
export class NoDisponibleComponent implements OnInit {

  public params: any;
  constructor(
    private route: ActivatedRoute,
    private callNumber: CallNumber
  ) {
    this.route.queryParams.subscribe(respuesta => {
      this.params = respuesta;
    });
   }

  ngOnInit() {}

  llamar(){
    this.callNumber.callNumber("56958400350", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

}
