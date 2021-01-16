import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }


  goTab1() {
    this.navCtrl.navigateForward('/tab1');
  }
  
  goTab2() {
    this.navCtrl.navigateForward('/tab2');
  }
  
  goTab3() {
    this.navCtrl.navigateForward('/tab3');
  }
  

}
