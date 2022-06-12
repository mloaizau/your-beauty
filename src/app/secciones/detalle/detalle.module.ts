import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleRoutingModule } from './detalle-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DetalleRoutingModule
  ],
  declarations: [DetalleComponent]
})
export class DetalleModule { }
