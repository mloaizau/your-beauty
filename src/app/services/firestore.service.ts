import 'firebase/firestore';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  public insertar(coleccion, datos) {
    return this.angularFirestore.collection(coleccion).add(datos);
  }

  public consultar(coleccion) {
    return this.angularFirestore.collection(coleccion).snapshotChanges();
  }

  public actualizar(id,coleccion) {
    this.angularFirestore.collection("YBUser").doc(id).set(coleccion);
    return;
  }
}
