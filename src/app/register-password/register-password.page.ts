import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { PasswordValidator } from './password.validator';
// const CryptoJS = require('crypto-js');
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.page.html',
  styleUrls: ['./register-password.page.scss'],
})
export class RegisterPasswordPage implements OnInit {

  data: any;
  email: any;
  token: any;

   // tslint:disable-next-line: variable-name
   validations_form: FormGroup;

   // tslint:disable-next-line: variable-name
  validation_messages = {
    password: [
      { type: 'required', message: 'Password is required.' }
    ],

    confirm_password: [
      { type: 'required', message: 'Confirm Password is required.' }
    ]
};
  constructor(private storage: Storage, public formBuilder: FormBuilder, public httpClient: HttpClient, public navCtrl: NavController) { }

  ngOnInit() {

    this.storage.get('RegisterData').then((val) => {
      console.log(val);
      this.email = val.email;
      this.token = val.token;
    });
    this.validations_form = this.formBuilder.group({
      // tslint:disable-next-line: object-literal-key-quotes
      'password': new FormControl('', Validators.required)});
  }

  onSubmit(values) {
    // tslint:disable-next-line: prefer-const
    values['email'] = this.email;
    let password = CryptoJS.AES.encrypt(values.password, this.token).toString();
    values.password = password ;
    console.log(values);
    console.log(this.token);
    // tslint:disable-next-line: prefer-const
    let headers: HttpHeaders = new HttpHeaders({ 'Accept': 'application/json',
                                                'Content-Type': 'application/json',
                                                 'token': this.token,
                                                 'Access-Control-Allow-Orign': '*' });
    console.log(headers.get('token'));
    this.httpClient.post('https://dev-messenger.quickwork.co/register/verifypassword', values, { headers }).subscribe(data => {
      console.log(data);
      // tslint:disable-next-line: no-string-literal
      if ( data['status'] === 'success') {
        const key = 'email';
        // tslint:disable-next-line: no-string-literal
        const value = values['email'];
        data[key] = value;
        console.log(data);
        this.storage.set('RegisterDataLogin', data).then(( CustomLogin ) => {
        this.navCtrl.navigateForward('/user-home');
            });
      }
   });
  }

}
