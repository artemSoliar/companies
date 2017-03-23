var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditApiService } from '../../providers/reddit-api-service';
import { GoodsPage } from '../goods/goods';
var CompanyCreateEdit = (function () {
    // updateCompany:boolean
    function CompanyCreateEdit(navCtrl, redditApi, params) {
        this.navCtrl = navCtrl;
        this.redditApi = redditApi;
        this.params = params;
        this.goodsPage = GoodsPage;
        var company = this.params.get('company');
        // let companies = this.params.get('companies').data;
        // console.log('companies', companies);
        // this.companies = companies
        this.name = company ? company.companyName : '';
        // this.updateCompany = !!this.params.get('company')
    }
    CompanyCreateEdit.prototype.getName = function () {
        console.log(this.name);
    };
    CompanyCreateEdit.prototype.addCompany = function (companyName) {
        var company = { companyName: companyName, companyGoods: [] };
        // console.log("this.companies", this.companies)
        // this.companies.push(company);
        // this.companies.push(company); 
        // this.redditApi.addCompany(company).subscribe(
        //         result => {console.log("post");  this.navCtrl.push(this.goodsPage, {company})},
        //         error => console.log(error.statusText)
        //     );
    };
    return CompanyCreateEdit;
}());
CompanyCreateEdit = __decorate([
    Component({
        selector: 'company-create-edit',
        templateUrl: 'company-create-edit.html',
        providers: [RedditApiService],
    }),
    __metadata("design:paramtypes", [NavController, RedditApiService, NavParams])
], CompanyCreateEdit);
export { CompanyCreateEdit };
//# sourceMappingURL=company-create-edit.js.map