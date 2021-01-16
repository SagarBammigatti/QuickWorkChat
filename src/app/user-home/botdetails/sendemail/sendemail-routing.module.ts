import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendemailPage } from './sendemail.page';

const routes: Routes = [
  {
    path: '',
    component: SendemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendemailPageRoutingModule {}
