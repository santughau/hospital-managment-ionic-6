import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SentCodePageRoutingModule } from './sent-code-routing.module';

import { SentCodePage } from './sent-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SentCodePageRoutingModule
  ],
  declarations: [SentCodePage]
})
export class SentCodePageModule {}
