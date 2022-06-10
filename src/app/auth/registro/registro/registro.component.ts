import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  registroUsuario: Usuario;
  isErrorEmail: boolean;
  isValid: boolean;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
  ) {
    this.registroUsuario = {} as Usuario;
  }

  ngOnInit() {
  }

  async registro(){
    this.firestoreService.insertar("YBUser", this.registroUsuario).then(() => {
      this.registroUsuario = {} as Usuario;
      this.router.navigate(["/registro/mensaje-confirmacion"]);
    }, (error) => {
      console.error(error);
    });
  }

  ValidateEmail(mail){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
      this.isErrorEmail = false;
      this.validadorGlobal();
    } else{
      this.isErrorEmail = true;
    }
  }

  validadorGlobal(){
    if(this.registroUsuario.nombres !== "" && this.registroUsuario.apellidos !== ""
    && this.registroUsuario.direccion !== ""
    && this.registroUsuario.passwd !== "" && !this.isErrorEmail){
      this.isValid = true;
    } else{
      this.isValid = false;
    }
  }



}
