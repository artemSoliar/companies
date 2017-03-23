import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { CompaniesPage } from '../pages/companies/companies';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class AvalonApp {
  rootPage = CompaniesPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
