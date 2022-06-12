import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoDisponibleComponent } from './no-disponible/no-disponible.component';
import { NoDisponibleRoutingModule } from './no-disponible-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NoDisponibleRoutingModule
  ],
  declarations: [NoDisponibleComponent]
})
export class NoDisponibleModule { }
