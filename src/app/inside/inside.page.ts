import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {

  constructor(private storage: Storage) { }
  data: any;
  name: any;
  email: any;
  id: any;
  accessToken: any;
  serverAuthCode: any;
  idToken: any;
  imageUrl: any;

  async ngOnInit() {
    this.storage.get('GoogleAuthData').then((val) => {
      console.log(val);
      this.name = val.name;
      this.email = val.email;
      this.id = val.id;
      this.serverAuthCode = val.serverAuthCode;
      this.accessToken = val.authentication.accessToken;
      this.idToken = val.authentication.idToken;
      this.imageUrl = val.imageUrl;
      console.log('Email: ', val.email);
      console.log('Name: ', this.name);
      console.log('id: ', this.id);
      console.log('serverAuthCode: ', this.serverAuthCode);
    });
  }

}
