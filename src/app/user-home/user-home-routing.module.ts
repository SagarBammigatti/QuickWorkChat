import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHomePage } from './user-home.page';

const routes: Routes = [
  {
    path: '',
    component: UserHomePage
  },
  {
    path: ':botid',
    loadChildren: () => import('./botdetails/botdetails.module').then( m => m.BotdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserHomePageRoutingModule {}
