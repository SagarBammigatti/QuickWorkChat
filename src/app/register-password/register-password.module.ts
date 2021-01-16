import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPasswordPageRoutingModule } from './register-password-routing.module';

import { RegisterPasswordPage } from './register-password.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPasswordPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPasswordPage]
})
export class RegisterPasswordPageModule {}
