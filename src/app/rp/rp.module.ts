import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RpPageRoutingModule } from './rp-routing.module';

import { RpPage } from './rp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RpPageRoutingModule
  ],
  declarations: [RpPage]
})
export class RpPageModule {}
