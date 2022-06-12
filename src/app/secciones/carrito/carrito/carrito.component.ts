import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { FirestoreService } from 'src/app/services/firestore.service';
import { CarritoProvider } from '../../../providers/carrito.provider';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {

  private carritoCompra = [];
  total: any = 0;
  registroCompra: Usuario;
  session: any;
  idColecction: any;
  constructor(
    private firestoreService: FirestoreService,
    private cart: CarritoProvider,
    private _session: SessionService,
    private router: Router
  ) { }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.buscarCarrito();
    this.session = await this._session.get('sessionActive');
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

  comprar(){
    if(this.session){
      let arrayColeccionID = [];
      let ff = this.firestoreService.consultar("YBUser").subscribe((resultadoConsultaTareas) => {
        resultadoConsultaTareas.forEach((datosUsers: any) => {
          arrayColeccionID.push({
            id: datosUsers.payload.doc.id,
            data: datosUsers.payload.doc.data()
          });
        });
        let idColecction = arrayColeccionID.find(x => x.data.correo == this.session.correo);
        this.datos(idColecction.id)
        ff.unsubscribe();
      });
    } else{
      this.router.navigate(["/home/tabs/perfil"]);
    }
  }

  updateCompra(id, compra){
    this.firestoreService.actualizar(id, compra);
    this.cart.removeAll();
    this._session.set('sessionActive', compra);
    this.router.navigate(["/home/tabs/historial"]);
  }

  datos(id){
    let cantidad = this.cart.getCantidad();
    let transaction = Math.floor((Math.random() * 1000000000) + 1);
    let compra = {} as Usuario;
    let historial = this.session.historial ? this.session.historial : [];

    compra.nombres = this.session.nombres;
    compra.apellidos = this.session.apellidos;
    compra.direccion = this.session.direccion;
    compra.correo = this.session.correo;
    compra.passwd = this.session.passwd;
    historial.push({ordenID: transaction,cantidad: cantidad,total: this.total});
    compra.historial = historial

    this.updateCompra(id, compra);
  }
}
