import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ios-script',
  templateUrl: './ios-script.page.html',
  styleUrls: ['./ios-script.page.scss'],
})
export class IosScriptPage implements OnInit {

  constructor(private storage: Storage, private navCtrl: NavController) { }

  iosScript: any;
  id: any;

  ngOnInit() {
    this.storage.get('SelectedBot').then((bots) => {
      if (bots) {
              this.id = bots._id;
              this.iosScript = bots.iosScript;
              // console.log(this.iosScript);
          }
        });
      }

    backButton() {
        this.navCtrl.navigateForward('user-home/' + this.id);
      }
}
