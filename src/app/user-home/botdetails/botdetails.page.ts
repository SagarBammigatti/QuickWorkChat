import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-botdetails',
  templateUrl: './botdetails.page.html',
  styleUrls: ['./botdetails.page.scss'],
})
export class BotdetailsPage implements OnInit {

  constructor(private storage: Storage, private route: ActivatedRoute, public navCtrl: NavController) { }

  id: any;

  // botdata: Array<{_id: string,
  //   botname: string,
  //   emailid: string,
  //   flag: string,
  //   apikey: string,
  //   timestamp: string,
  //   androidScript: string,
  //   apptype: string,
  //   bottitle: string,
  //   host_name: string,
  //   iosScript: string,
  //   script: string,
  //   scriptData: string,
  //   webcss: string,
  //   webhook: string
  //   }> = [];

  botName: any;

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('botid');
      console.log('present bot id');
      console.log(this.id);
    });
    this.storage.get('BotDetails').then((bots) => {
      if (bots) {
        bots.forEach(element => {
          if (element._id === this.id) {
            this.botName = element.botname;
            this.storage.set('SelectedBot', element);
          }
        });
      }
      });

  }

  backButton() {
    this.botName = null;
    this.navCtrl.navigateForward('/user-home');
  }

}
