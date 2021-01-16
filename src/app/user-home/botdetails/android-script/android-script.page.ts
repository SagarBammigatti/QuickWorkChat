import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-android-script',
  templateUrl: './android-script.page.html',
  styleUrls: ['./android-script.page.scss'],
})
export class AndroidScriptPage implements OnInit {

  constructor(private storage: Storage,  public navCtrl: NavController) { }

    androidScript: any;
    id: any;
  ngOnInit() {
    this.storage.get('SelectedBot').then((bots) => {
      if (bots) {
              this.id = bots._id;
              this.androidScript = bots.androidScript;
              // console.log(this.androidScript);
          }
        });
      }


   backButton() {
        this.navCtrl.navigateForward('user-home/' + this.id);
      }
}
