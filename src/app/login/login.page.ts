import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
// import '@codetrix-studio/capacitor-google-auth';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

const { GoogleAuth, SplashScreen} = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
        { type: 'pattern', message: 'Please wnter a valid email.' }
      ]
  };

  ngOnInit() {
    SplashScreen.hide();
    this.storage.set('GoogleAuthData', null);
    this.storage.set('GoogleAuthResults', null);
    this.storage.set('CustomLogin', null);
    this.validations_form = this.formBuilder.group({
      // tslint:disable-next-line: object-literal-key-quotes
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
  }

async GoogleSignIn() {
  const result = await GoogleAuth.signIn(); 
  console.log('<------><-----><------><-----><------><-----><------><----->');
  console.log(result);
  console.log('<------><-----><------><-----><------><-----><------><----->');
  if (result) {
    
  }
}

onSubmit(values) {
  console.log(values);
  // tslint:disable-next-line: prefer-const
  // let headers: HttpHeaders = new HttpHeaders();
  // headers.append('Accept', 'application/json');
  // headers.append('Content-Type', 'application/json' );
  let headers: HttpHeaders = new HttpHeaders({ 'Accept': 'application/json',
  'Content-Type': 'application/json',
   'Access-Control-Allow-Orign': 'http://localhost:8100' });
  console.log(headers);
  this.httpClient.post('https://dev-messenger.quickwork.co/login/email', values, { headers }).subscribe(data => {
    console.log(data);
    // tslint:disable-next-line: no-string-literal
    if ( data['status'] === 'success' ) {
      const key = 'email';
      // tslint:disable-next-line: no-string-literal
      const value = values['email'];
      data[key] = value;
      console.log(data);
      this.storage.set('CustomLogin', data).then(( CustomLogin ) => {
      this.navCtrl.navigateForward('/password');
          });
    }
  });
}

GoToRegisterPage() {
  this.navCtrl.navigateForward('/register');
}


}
