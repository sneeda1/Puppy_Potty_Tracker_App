import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RpPage } from './rp.page';

const routes: Routes = [
  {
    path: '',
    component: RpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RpPageRoutingModule {}
