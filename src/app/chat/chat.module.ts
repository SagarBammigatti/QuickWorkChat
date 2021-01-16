import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatPage } from './chat.page';
// import {AutosizeModule} from 'ngx-autosize';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { Storage } from '@ionic/storage';
import { ChatService } from '../chatUser_services/chat.service';



/*
export function SocketFactory() {
  this.storage.get('GoogleAuthData').then((val) => {
    if (val) {
    console.log('from chat module mail:', val.mail);
    console.log('token:', val.token);

   // this.email = val.mail;
    }
  });
  // tslint:disable-next-line: max-line-length
  return  { url: 'https://dev-ws-messenger.quickwork.co?role=supportMessage&clientId=LPzreo9vY2qlQuRQzMTseh0DwiqwnPe52hTV3DzB36aVM7vslyA9bzq&botkey=e52hTV3DzB36aVM7vslyA9bzq'};
}

// tslint:disable-next-line: max-line-length
const config: SocketIoConfig =  SocketFactory(); // { url: 'https://dev-ws-messenger.quickwork.co?role=supportMessage&clientId=LPzreo9vY2qlQuRQzMTseh0DwiqwnPe52hTV3DzB36aVM7vslyA9bzq&botkey=e52hTV3DzB36aVM7vslyA9bzq'};
*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule,
    HttpClientModule
   // SocketIoModule.forRoot(config),
  ],
  declarations: [ChatPage]
})


export class ChatPageModule {}
