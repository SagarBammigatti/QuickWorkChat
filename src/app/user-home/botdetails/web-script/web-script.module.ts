import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WebScriptPageRoutingModule } from './web-script-routing.module';

import { WebScriptPage } from './web-script.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebScriptPageRoutingModule
  ],
  declarations: [WebScriptPage]
})
export class WebScriptPageModule {}
