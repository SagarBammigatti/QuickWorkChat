import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
// const CryptoJS = require('crypto-js');
import * as CryptoJS from 'crypto-js';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  data: any;
  email: any;
  token: any;
  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;

   // tslint:disable-next-line: variable-name
  validation_messages = {
    password: [
      { type: 'required', message: 'Password is required.' }
    ]
};
  constructor(private storage: Storage,
              public formBuilder: FormBuilder,
              public httpClient: HttpClient,
              public navCtrl: NavController,
              public alertController: AlertController) { }

  ngOnInit() {
    this.storage.get('CustomLogin').then((val) => {
      console.log(val);
      this.email = val.email;
      this.token = val.token;
    });
    this.validations_form = this.formBuilder.group({
      // tslint:disable-next-line: object-literal-key-quotes
      'password': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  async onSubmit(values) {
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
    this.httpClient.post('https://dev-messenger.quickwork.co/login/vp', values, { headers }).subscribe(async data => {
      console.log(data);
      // tslint:disable-next-line: no-string-literal
      if ( data['status'] === 'success' && data['role'] === 'admin') {
        const key = 'email';
        // tslint:disable-next-line: no-string-literal
        const value = values['email'];
        data[key] = value;
        console.log(data);
        this.storage.set('CustomLogin', data).then(( CustomLogin ) => {
        this.navCtrl.navigateForward('/user-home');
            });
      }
      if ( data['status'] === 'success' && data['role'] === 'agent') {
        const key = 'email';
        // tslint:disable-next-line: no-string-literal
        const value = values['email'];
        data[key] = value;
        console.log(data);
        this.storage.set('CustomLogin', data).then(( CustomLogin ) => {
        this.navCtrl.navigateForward('/tabs');
            });
      }
   });
  }

}
