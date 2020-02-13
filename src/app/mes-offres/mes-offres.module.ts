import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesOffresPageRoutingModule } from './mes-offres-routing.module';

import { MesOffresPage } from './mes-offres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesOffresPageRoutingModule
  ],
  declarations: [MesOffresPage]
})
export class MesOffresPageModule {}
