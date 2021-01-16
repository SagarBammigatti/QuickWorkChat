import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndroidScriptPageRoutingModule } from './android-script-routing.module';

import { AndroidScriptPage } from './android-script.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndroidScriptPageRoutingModule
  ],
  declarations: [AndroidScriptPage]
})
export class AndroidScriptPageModule {}
