import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public navCtrl: NavController,
              private storage: Storage,
              public httpClient: HttpClient,
              public formBuilder: FormBuilder,
              private router: Router) { }

  // tslint:disable-next-line: variable-name
  validations_form: FormGroup;

   // tslint:disable-next-line: variable-name
   validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],

    username: [
      { type: 'required', message: 'Username is required.' },
    ]
};

  ngOnInit() {
    this.storage.set('RegisterData', null);
    this.validations_form = this.formBuilder.group({
      // tslint:disable-next-line: object-literal-key-quotes
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      // tslint:disable-next-line: object-literal-key-quotes
      'username': new FormControl('', Validators.compose([
        Validators.required,
      ]))
    });
  }

  onSubmit(values) {
    console.log(values);
    // tslint:disable-next-line: prefer-const
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );
    this.httpClient.post('https://dev-messenger.quickwork.co/register/email', values, { headers }).subscribe(data => {
      console.log(data);
      // tslint:disable-next-line: no-string-literal
      if ( data['status'] === 'success') {
        const key = 'email';
        // tslint:disable-next-line: no-string-literal
        const value = values['email'];
        data[key] = value;
        console.log(data);
        this.storage.set('RegisterData', data).then(( CustomLogin ) => {
        this.navCtrl.navigateForward('/register-otp');
            });
      }
    });
  }

}
