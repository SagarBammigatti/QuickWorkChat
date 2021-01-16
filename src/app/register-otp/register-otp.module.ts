import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterOtpPageRoutingModule } from './register-otp-routing.module';

import { RegisterOtpPage } from './register-otp.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterOtpPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterOtpPage]
})
export class RegisterOtpPageModule {}
