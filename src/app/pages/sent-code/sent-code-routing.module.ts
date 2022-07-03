import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SentCodePage } from './sent-code.page';

const routes: Routes = [
  {
    path: '',
    component: SentCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SentCodePageRoutingModule {}
