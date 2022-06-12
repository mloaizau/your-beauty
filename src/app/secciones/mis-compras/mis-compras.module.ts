import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MisComprasComponent } from './mis-compras-routing/mis-compras.component';
import { MisComprasRoutingModule } from './mis-compras-routing.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MisComprasRoutingModule
  ],
  declarations: [MisComprasComponent]
})
export class MisComprasModule { }
