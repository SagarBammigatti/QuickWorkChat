import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportAgentsPageRoutingModule } from './support-agents-routing.module';

import { SupportAgentsPage } from './support-agents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportAgentsPageRoutingModule
  ],
  declarations: [SupportAgentsPage]
})
export class SupportAgentsPageModule {}
