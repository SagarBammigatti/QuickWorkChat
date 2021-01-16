import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-addagent',
  templateUrl: './addagent.page.html',
  styleUrls: ['./addagent.page.scss'],
})
export class AddagentPage implements OnInit {
  
  constructor(public navCtrl: NavController,
              private storage: Storage,
              public httpClient: HttpClient,
              public formBuilder: FormBuilder,
              private router: Router,
              public toastController: ToastController) { }

  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;

  // tslint:disable-next-line: variable-name
  validation_messages = {
      email: [
        { type: 'required', message: 'Email is required.' },
        { type: 'pattern', message: 'Please wnter a valid email.' }
      ]
  };

  token: any;
  email: any;
  botkey: any;
  apikey: any;
  values: any;

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      // tslint:disable-next-line: object-literal-key-quotes
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  }


  ionViewWillEnter() {
    this.storage.get('CustomLogin').then((LoginData) => {
      // console.log(LoginData);
      this.token = LoginData.token;
      // console.log(this.token);
    });

    this.storage.get('SelectedBot').then((bot) => {
      if (bot) {
        // console.log(bot);
        this.apikey = bot.apikey;
        this.botkey = bot.botkey;
        this.email = bot.emailid;
        // console.log(this.apikey);
        // console.log(this.botkey);
        this.values = { apikey: this.apikey,
                       botkey: this.botkey
        };
      }
    });
  }

  onSubmit(values) {
    // console.log(values);
    this.validations_form.reset();
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*');
    // tslint:disable-next-line: max-line-length
    this.httpClient.post('https://dev-messenger.quickwork.co/addagent?mail=' + this.email + '&token=' + this.token + '&type=custom', values, { headers}).subscribe(async data => {
      console.log(data);
      if (data['status'] === 'success') {
        const toast = await this.toastController.create({
          message: this.email + ' agent has been successfully added',
          duration: 2000
        });
        toast.present();
      } else {
        const toast = await this.toastController.create({
          message: 'Agent ' + this.email + ' already exists',
          duration: 2000
        });
        toast.present();
      }
    });
  }

}
