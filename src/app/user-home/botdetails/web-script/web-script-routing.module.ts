import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebScriptPage } from './web-script.page';

const routes: Routes = [
  {
    path: '',
    component: WebScriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebScriptPageRoutingModule {}
