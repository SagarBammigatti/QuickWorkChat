import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotdetailsPageRoutingModule } from './botdetails-routing.module';

import { BotdetailsPage } from './botdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotdetailsPageRoutingModule
  ],
  declarations: [BotdetailsPage]
})
export class BotdetailsPageModule {}
