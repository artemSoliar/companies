import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AvalonApiService } from '../../providers/avalon-api-service';
import { GoodsPage } from '../goods/goods'
import { CompanyCreateEdit } from '../company-create-edit/company-create-edit'


@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html',
})
export class CompaniesPage {
  loadCompleted: boolean = false;
  companies: Array<any>;
  goodsPage = GoodsPage;
  companyCreateEdit = CompanyCreateEdit;
  query: string

  constructor(public navCtrl: NavController, public avalonApi: AvalonApiService, public navParams: NavParams) {
    this.loadCompanies();
    this.query = ""
  }

  loadCompanies() {
    this.avalonApi.getCompanies().subscribe(
      result => {
        this.avalonApi.dataCompanies = result.json().success;
        this.handleSearch();
        this.loadCompleted = true;
      },
      error => console.log(error.statusText)
    );
  }

  handleSearch() {
    this.companies = this.avalonApi.dataCompanies.filter((el) => {
      let searchValue = el.companyName ? el.companyName.toLowerCase() : '';
      return searchValue.indexOf(this.query) !== -1;
    });;
  }

  clearQuery() {
    this.query = '';
    this.handleSearch();
  }

  goToGoods(company) {
    if (company) {
      this.navCtrl.push(this.goodsPage, {
        company
      })
    }
  }

  goToUpdateCompany(e, company) {
    e.stopPropagation();
    this.navCtrl.push(this.companyCreateEdit, {
      company
    })
  }

  goToCreateCompany() {
    this.navCtrl.push(this.companyCreateEdit)
  }
}