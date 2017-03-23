import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AvalonApiService } from '../../providers/avalon-api-service';
import { GoodsPage } from '../goods/goods'
import { CompaniesPage } from '../companies/companies'


@Component({
  selector: 'company-create-edit',
  templateUrl: 'company-create-edit.html',
})
export class CompanyCreateEdit {
  goodsPage = GoodsPage
  companiesPage = CompaniesPage
  name: string
  companies: Array<any>
  updateShow: boolean
  index: number

  constructor(public navCtrl: NavController, public avalonApi: AvalonApiService, public params: NavParams) {
    let company = this.params.get('company');
    this.name = company ? company.companyName : '';
    this.updateShow = !!this.params.get('company')
    this.index = this.avalonApi.dataCompanies.map(function(company) {
      return company.companyName;
    }).indexOf(this.name);
  }

  addCompany(companyName) {
    let company = {
      companyName,
      companyGoods: []
    }

    if (companyName) {
      this.avalonApi.addCompany(company).subscribe(
        (result) => {
          this.avalonApi.dataCompanies.push(company);
          this.navCtrl.remove(0, 2);
          this.navCtrl.push(this.companiesPage)
          // this.navCtrl.remove(1, 1);
          // this.navCtrl.push(this.goodsPage, {
          //   company
          // })
        },
        error => console.log(error.statusText)
      );
    }
  }

  updateCompany(newCompanyName) {
    if (newCompanyName) {
      let currentCompany = this.params.get('company');
      let currentCompanyName = currentCompany.companyName;
      currentCompany.companyName = newCompanyName;
      this.avalonApi.updateCompany(currentCompanyName, currentCompany).subscribe(
        result => {
          this.avalonApi.dataCompanies[this.index].companyName = newCompanyName;
          this.navCtrl.remove(0, 2);
          this.navCtrl.push(this.companiesPage)
        },
        error => console.log(error.statusText)
      );
    }
  }

  deleteCompany(companyName) {
    if (companyName) {
      this.avalonApi.deleteCompany(companyName).subscribe(
        result => {
          this.navCtrl.remove(0, 2);
          this.navCtrl.push(this.companiesPage)
        },
        error => console.log(error.statusText)
      );
    }
  }
}