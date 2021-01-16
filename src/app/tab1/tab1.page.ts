import { Component } from '@angular/core';
import { ChatService } from '../chatUser_services/chat.service';
import { OnInit } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})

export class Tab1Page {

  constructor(public api: ChatService  , public loadingController: LoadingController, private storage:Storage,
              public navCtrl: NavController) {}

  orgData: any = [];
  filterdata: any = [];
  email:any;
  token:any;

  public searchTerm: string = '';
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

    // this.storage.get('apikey').then((val)=>{
    //   console.log("apikey home:",val);
    //   this.email=val;
    // });
    // this.storage.get('botkey').then((val)=>{
    //   console.log("botkey home:",val);
    //   this.token=val;
    // });

    this.storage.get('CustomLogin').then((cval) => {
      if (cval) {
        console.log('Custom Login');
        console.log(cval);
        
      }
    });

//    const res=this.getData();
    this.filterdata = this.orgData;
    this.getData();

    // this.filterdata = this.data1; // this also doesnt work
    // console.log('name', this.data1); this will not print data we have to call from html page
  }

  // To fetch the list of customer of our support page
  async getData() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();

    this.api.getUserData()
      .subscribe(res => {
        this.orgData = res;
        console.log('getuserData', res); // to display list of users
        this.setFilteredItems(); // calling the function sp that data is copied to filtered data
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  filterItems(searchTerm) {
    return this.orgData.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  setFilteredItems() {
    // if the string is null then the original data of orgdata will be copied to filterdata
    if (this.searchTerm === '') {
      this.filterdata = this.orgData;
    } else {
      this.filterdata = this.filterItems(this.searchTerm);
    }
    // console.log('searched', this.searchTerm);
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