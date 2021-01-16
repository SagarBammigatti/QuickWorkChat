import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IosScriptPageRoutingModule } from './ios-script-routing.module';

import { IosScriptPage } from './ios-script.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IosScriptPageRoutingModule
  ],
  declarations: [IosScriptPage]
})
export class IosScriptPageModule {}
