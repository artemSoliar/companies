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
/*
  Generated class for the Comments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var GoodsPage = (function () {
    function GoodsPage(navCtrl, redditApi, params) {
        this.navCtrl = navCtrl;
        this.redditApi = redditApi;
        this.params = params;
        // comments;
        this.loadCompleted = false;
        this.company = this.params.get('company').companyName;
        console.log(this.company);
        this.load();
    }
    GoodsPage.prototype.load = function () {
        var _this = this;
        this.redditApi.getCompany(this.company).subscribe(function (result) { _this.goods = result.json().success.companyGoods; console.log(result.json().success); _this.loadCompleted = true; }, function (error) { return console.log(error.statusText); });
        // this.redditApi.fetchComments(this.post).subscribe((comments) => {
        //   // comments.sort((a,b) => b.score - a.score);
        //   this.comments = comments;
        //   this.loadCompleted = true;
        //   console.log(this.comments)
        // })
    };
    return GoodsPage;
}());
GoodsPage = __decorate([
    Component({
        selector: 'page-goods',
        templateUrl: 'goods.html',
        providers: [RedditApiService],
    }),
    __metadata("design:paramtypes", [NavController, RedditApiService, NavParams])
], GoodsPage);
export { GoodsPage };
//# sourceMappingURL=goods.js.map