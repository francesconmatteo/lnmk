import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesOffresPage } from './mes-offres.page';

const routes: Routes = [
  {
    path: '',
    component: MesOffresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesOffresPageRoutingModule {}
