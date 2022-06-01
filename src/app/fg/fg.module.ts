import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FgPageRoutingModule } from './fg-routing.module';

import { FgPage } from './fg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FgPageRoutingModule
  ],
  declarations: [FgPage]
})
export class FgPageModule {}
