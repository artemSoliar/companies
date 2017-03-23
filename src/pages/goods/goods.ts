import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AvalonApiService } from '../../providers/avalon-api-service';

@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html',
})

export class GoodsPage {
  company;
  goods;
  newGoods;
  loadCompleted: boolean = false;

  constructor(public navCtrl: NavController, public avalonApi: AvalonApiService, public params: NavParams) {
    this.company = this.params.get('company');
    this.load();
  }

  load() {
    this.avalonApi.getCompany(this.company.companyName).subscribe(
      result => {
        this.goods = result.json().success.companyGoods;
        this.loadCompleted = true;
      },
      error => console.log(error.statusText)
    );
  }

  deleteGoods(index) {
    let currentCompany = this.company;
    currentCompany.companyGoods.splice(index, 1);
    this.avalonApi.updateCompany(currentCompany.companyName, currentCompany).subscribe(
      result => {
        this.goods.splice(index, 1)
      },
      error => console.log(error.statusText)
    );
  }

  addGoods() {
    if (this.newGoods) {
      let currentCompany = this.company;
      currentCompany.companyGoods.push(this.newGoods);
      this.avalonApi.updateCompany(currentCompany.companyName, currentCompany).subscribe(
        result => {
          this.goods.push(this.newGoods);
          this.newGoods = ''
        },
        error => console.log(error.statusText)
      );
    }
  }
}