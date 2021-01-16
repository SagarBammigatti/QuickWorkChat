import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IosScriptPage } from './ios-script.page';

const routes: Routes = [
  {
    path: '',
    component: IosScriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IosScriptPageRoutingModule {}
