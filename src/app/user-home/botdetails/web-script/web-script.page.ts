import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-web-script',
  templateUrl: './web-script.page.html',
  styleUrls: ['./web-script.page.scss'],
})
export class WebScriptPage implements OnInit {

  constructor(private storage: Storage, private navCtrl: NavController) { }

  webScript: any;
  id: any;

  ngOnInit() {
    this.storage.get('SelectedBot').then((bots) => {
      if (bots) {
              this.id = bots._id;
              this.webScript = bots.script;
              // console.log(this.webScript);
          }
        });
      }

    backButton() {
        this.navCtrl.navigateForward('user-home/' + this.id);
      }
}
