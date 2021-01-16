import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {

  constructor(private storage: Storage, private httpClient: HttpClient) { }

  apikey: any;
  botkey: any;
  email: any;
  token: any;

  id: any;
  count: any;
  usertopic: any;

  userAnalytics: Array<{_id: string,
    count: string,
    usertopic: string
    }> = [];

  ngOnInit() {
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
        const values = { apikey: this.apikey,
                       botkey: this.botkey
        };
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json' );
        headers.append('Access-Control-Allow-Origin', '*');
        this.httpClient.post('https://dev-messenger.quickwork.co/analytic_data1?mail=' + this.email + '&token=' + this.token + '&type=custom', values, { headers}).subscribe(data => {
          console.log(data['data']['data']);
          this.userAnalytics = data['data']['data'];
        });
      }
    });
  }

}
