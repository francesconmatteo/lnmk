import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonPanierPage } from './mon-panier.page';

const routes: Routes = [
  {
    path: '',
    component: MonPanierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonPanierPageRoutingModule {}
