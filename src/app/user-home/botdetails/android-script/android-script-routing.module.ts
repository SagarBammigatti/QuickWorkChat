import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AndroidScriptPage } from './android-script.page';

const routes: Routes = [
  {
    path: '',
    component: AndroidScriptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AndroidScriptPageRoutingModule {}
