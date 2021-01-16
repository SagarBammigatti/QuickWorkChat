import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportAgentsPage } from './support-agents.page';

const routes: Routes = [
  {
    path: '',
    component: SupportAgentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportAgentsPageRoutingModule {}
