import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendemailPageRoutingModule } from './sendemail-routing.module';

import { SendemailPage } from './sendemail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendemailPageRoutingModule
  ],
  declarations: [SendemailPage]
})
export class SendemailPageModule {}
