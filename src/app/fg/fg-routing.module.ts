import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FgPage } from './fg.page';

const routes: Routes = [
  {
    path: '',
    component: FgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FgPageRoutingModule {}
