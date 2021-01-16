import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddagentPageRoutingModule } from './addagent-routing.module';

import { AddagentPage } from './addagent.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddagentPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddagentPage]
})
export class AddagentPageModule {}
