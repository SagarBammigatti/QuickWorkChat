import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { BotdetailsPage } from './botdetails/botdetails.page';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {

  constructor(private storage: Storage,
              public httpClient: HttpClient,
              public formBuilder: FormBuilder,
              public toastController: ToastController) { }
  data: any;
  email: any;
  token: any;
  type: any;
  apiKey: any;
  botdata: Array<{_id: string,
                  botname: string,
                  emailid: string,
                  flag: string,
                  apikey: string,
                  timestamp: string,
                  androidScript: string,
                  apptype: string,
                  bottitle: string,
                  host_name: string,
                  iosScript: string,
                  script: string,
                  scriptData: string,
                  webcss: string,
                  webhook: string
                  }> = [];

    // tslint:disable-next-line: variable-name
    validations_form: FormGroup;

    // tslint:disable-next-line: variable-name
    validation_messages = {
        botname: [
          { type: 'required', message: 'Bot name is required.' }
        ]
    };

  async ngOnInit() {
    this.validations_form = this.formBuilder.group({
      // tslint:disable-next-line: object-literal-key-quotes
      'botname': new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
    this.storage.get('GoogleAuthData').then((val) => {
      if (val) {
      console.log('Google login');
      console.log(val);
      this.email = val.mail;
      this.token = val.token;
      this.type = val.type;
      }
    });

    this.storage.get('CustomLogin').then((cval) => {
      if (cval) {
        console.log('Custom Login');
        console.log(cval);
        this.email = cval.email;
        this.token = cval.token;
        this.type = cval.type;
        console.log(this.email);
        console.log(this.token);
        this.botDetails();
      }
    });

    this.storage.get('RegisterDataLogin').then((rval) => {
      if (rval) {
        console.log(rval);
        console.log('Register Login');
        this.email = rval.email;
        this.token = rval.token;
        this.type = "custom";
        this.botDetails();
      }
    });

  }

  

  addbot(incoming) {
    this.validations_form.reset();
    let values = {email: this.email,
                  bot: incoming.botname};
    let headers: HttpHeaders = new HttpHeaders({ 'Accept': 'application/json',
   'Content-Type': 'application/json',
                   'Access-Control-Allow-Orign': '*' ,
                   'Access-Control-Allow-Credentrials': 'True' });
    console.log('add bot');
    console.log(this.token);
    console.log(this.type);
    console.log(values);
    // tslint:disable-next-line: max-line-length
    this.httpClient.post('https://dev-messenger.quickwork.co/addbot?token=' + this.token + '&type=' + this.type + '&mail=' + this.email , values, { headers }).subscribe(async data => {
    console.log(data);
    const toast = await this.toastController.create({
      message: 'Bot' + incoming.botname + ' added',
      duration: 4000
    });
    toast.present();
  });

  }

botDetails() {
  let values = { email: this.email,
                 token: this.token,
                 type: this.type};
  let headers: HttpHeaders = new HttpHeaders();
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/json' );
  headers.append('Access-Control-Allow-Origin', '*');
  console.log("sending data ");
  console.log(values);
  // tslint:disable-next-line: max-line-length
  this.httpClient.post('https://dev-messenger.quickwork.co/botdetail?mail=' + values.email + '&token=' + values.token + '&type=' + values.type, values, { headers}).subscribe(data => {
  console.log("Bot Details");
  console.log(data);
  console.log("Number of Bots --> " + Object.keys(data['data']).length);
  console.log(data['data']);
  this.storage.set('BotDetails', data['data']);
  this.storage.set('ApiKey', data['apikey']);
  this.apiKey = data['apikey'];
  this.botdata = data['data'];
  console.log(this.botdata);
});
}


}
