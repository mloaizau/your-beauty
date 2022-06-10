import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito-routing/carrito.component';
import { CarritoRoutingModule } from './carrito-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CarritoRoutingModule
  ],
  declarations: [CarritoComponent]
})
export class CarritoModule { }
