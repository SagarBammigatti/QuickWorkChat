import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
// import { Socket } from 'ngx-socket-io';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chatUser_services/chat.service';
import { async } from 'rxjs/internal/scheduler/async';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  messages = [];
  oldmessages = [];
  message = '';
  currentUser = 'supportMessage';
  otherUser = 'userMessage';
  cuimgsrc = '/assets/girl.png';
  otimgsrc = '/assets/boss.png';
  myid  = null; // to store get mothod data i..e username
  mytopic = null;
  mytimestamp = new Date().getTime();
  orgData = []; // for storing query result
  // tslint:disable-next-line: variable-name
  selected_user = null; // for support mail user
  socket: any;
  // this sorts our message wrt date of the creation
  get sortData() {
    return this.messages.sort((a, b) => {
      return (new Date(a.createdat) as any ) - (new Date(b.createdat) as any);
    });
  }

  // tslint:disable-next-line: max-line-length
  constructor(public api: ChatService, private activatedRoute: ActivatedRoute  , private toastCtrl: ToastController, public loadingController: LoadingController) {
  }

  ngOnInit() {

    // tslint:disable-next-line: max-line-length
    // apikey+botkey=client id
    this.socket = io('https://dev-ws-messenger.quickwork.co?role=supportMessage&clientId=LPzreo9vY2qlQuRQzMTseh0DwiqwnPe52hTV3DzB36aVM7vslyA9bzq&botkey=e52hTV3DzB36aVM7vslyA9bzq');

    // calling user list function
    console.log('called mail id in ts page');
    this.getMailUsers();
    // get method function
    this.myid = this.activatedRoute.snapshot.paramMap.get('myid');
    this.mytopic = this.activatedRoute.snapshot.paramMap.get('mytopic');
    console.log('Mytopic', this.mytopic);

    this.getUsermsg();


    // socket code to send and receive msg
    this.socket.connect();
    this.socket.emit('reconnectsup', 'hi');

    // Optional code to improve, check if the user has joined and send toash messages
    /*this.socket.fromEvent('users-changed').subscribe(data => {
      console.log('got data:', data);
      const user = data['user'];
      // tslint:disable-next-line: triple-equals
      if (data['event'] == 'left') {
        this.showToast(`user left:${user}`);
      } else {
        this.showToast(`user joined:${user}`);
      }
    });
    */

    // For message receiving part
    // this.socket.on('message', (msg) => {
    this.socket.on('new message', (message) => {

      // parsing the string to json so it is easy to read
      const JSmsg = JSON.parse(String(message));

      // Reading the text message from the user
      const decstr = atob(JSmsg.msg.data.text);

      this.messages.push( {
        user: this.otherUser,
        createdat: new Date().getTime(),
        mymsg : decstr
      });

    });
  }

  // list of users for support
  async getMailUsers() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();

    this.api.getMailData().subscribe(res => {

        this.orgData = res;
        this.selected_user = res[0];
        console.log('received', this.orgData);
        console.log('USER set:', this.selected_user);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  async getUsermsg() {
    const loading = await this.loadingController.create({
      message: 'loading'
    });
    await loading.present();
    this.api.getUserMessages(this.mytopic, this.mytimestamp).subscribe(res => {
      console.log('recived messages', res);
      // this.oldmessages.push(res);
      // console.log('old msg',this.oldmessages);
      this.oldmessages = res;

      // tslint:disable-next-line: prefer-for-of
      for ( let i = 0; i < this.oldmessages.length; i++) {
        const decstr = atob(this.oldmessages[i].msg.data.text);
        this.mytimestamp = this.oldmessages[i].msg.data.timestamp;
        console.log('decryped', decstr);
        this.messages.push({
          user: this.oldmessages[i].type,
          createdat: this.oldmessages[i].timestamp,
          mymsg : decstr
        });
      }
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

  sendMessage() {
    // encrypteding the user entered message
    const encmsg = btoa(this.message); // atob(decrypt)

    // tslint:disable-next-line: max-line-length

    const msg = new String(`{"command":"no","botTopic":"e52hTV3DzB36aVM7vslyA9bzq","userTopic":"`+this.mytopic+`","msg": {"data" : {"text" : "${encmsg}","timestamp" : "1579254827177","email":"gururajraibagi7@gmail.com"},"type":"simpletext"},"apiKey":"LPzreo9vY2qlQuRQzMTseh0DwiqwnP","type":"supportMessage"}`);
    // sending our encrypted message and allother details details
    console.log('message sent:',msg);
    this.socket.emit('supportMessage', msg);

    this.messages.push( {
      user: this.currentUser,
      mymsg : this.message,
      createdat: new Date().getTime()
    });
    console.log('AFTER sent array: ', this.messages);
    this.message = '';
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  // pull to refresh code
  doRefresh(event) {
    console.log('Begin async operation');
    this.getUsermsg();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message : msg,
      position : 'bottom',
      duration : 2000
    });
    toast.present();
  }
}

