import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  searchmsg = '';
  users: Observable<any>;
  apikey = 'LPzreo9vY2qlQuRQzMTseh0DwiqwnP';
  bottopic = 'e52hTV3DzB36aVM7vslyA9bzq';// bot key
  mail = 'gururajraibagi7@gmail.com';
  botkey = 'e52hTV3DzB36aVM7vslyA9bzq';
  // tslint:disable-next-line: max-line-length
 
  token: any;// 'ya29.Il-6BzHoz6SOZL7l-mvkQjJTls4oREw9W7rOSIrc-tp9F97ZIfgd5oQtgPVSq8mNOA03_8UPkFGRaYBy0okfZubgc40WBbmRaX9rfxeMf-ZMkmNaoh2_63Tlx3AbpTKcFQ';

  // To get the list of users (Customers list) 'url' variable
  // tslint:disable-next-line: max-line-length
  url = `https://dev-messenger.quickwork.co/agent/getAllConversations?apiKey=${this.apikey}&botTopic=${this.bottopic}&mail=${this.mail}&token=${this.token}&type=oauth&apikey=${this.apikey}&botkey=${this.botkey}&userTopic=&email=gururajraibagi7%40gmail.com`;

  // to fetch the mail users (support list) support mail
  // tslint:disable-next-line: max-line-length
  urlmail = `https://dev-messenger.quickwork.co/supportlist?apikey=LPzreo9vY2qlQuRQzMTseh0DwiqwnP&botkey=e52hTV3DzB36aVM7vslyA9bzq&mail=gururajraibagi7@gmail.com&token=ya29.Il-8B-rOztwGhLnEi6eQaC2GYFZARiVrUnj1lFEfjPxm_ej5wfbng3x_mLnGBVnDsJqmZpddUabqx117Pgy-50gzhpkyLDZlE263wD9cdHuNJ2eWePAYKBBHH0mq9zhdgA&type=oauth`;

  constructor(private http: HttpClient, private storage: Storage) { }
  mytoken: any;
  email: any;
  // tslint:disable-next-line: use-lifecycle-interface
  
  ngOnInit() {
    this.storage.get('GoogleAuthData').then((val) => {
      if (val) {
      console.log('Google login');
      console.log("data chatpage:",val);
     // this.email = val.mail;
      }
    });

    this.storage.get('CustomLogin').then((cval) => {
      if (cval) {
        console.log('Custom Login');
        console.log(cval);
      }
    });

    this.storage.get('apikey').then((val)=>{
      console.log("apikey chatpage:::",val);
      this.mail=val;
    });
    this.storage.get('botkey').then((val)=>{
      console.log("botkey chatpage::",val);
      this.token=val;
    });

  }

  // To list the
  getUserData(): Observable<any> {
    return this.http.get(this.url); // forkJoin([response1, response2, response3, response4]);
  }

  getMailData(): Observable<any> {
    // console.log("calling get maildata in service page");
    return this.http.get(this.urlmail); // forkJoin([response1, response2, response3, response4]);
  }

  // To fetch the user old messages as we refresh
  getUserMessages(topic,timeStamp): Observable<any> {

    const urlmessages = `https://dev-messenger.quickwork.co/agent/getOldMessages?userTopic=${topic}&timeStamp=${timeStamp}}`;
    const head = new HttpHeaders({apikey : 'LPzreo9vY2qlQuRQzMTseh0DwiqwnP'});
    console.log('calling user messages', urlmessages);
    return this.http.get(urlmessages, { headers: head}); // forkJoin([response1, response2, response3, response4]);
  }

  
  setAdditionaldata(bkey,apikey,){
    this.bottopic = bkey;
    this.apikey =apikey;

  }
}
