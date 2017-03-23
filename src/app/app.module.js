var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';
import { RedditReaderApp } from './app.component';
import { PostsPage } from '../pages/posts/posts';
import { CommentsPage } from '../pages/comments/comments';
import { GoodsPage } from '../pages/goods/goods';
import { CompanyCreateEdit } from '../pages/company-create-edit/company-create-edit';
import { CommentsList } from '../pages/comments/commentsList/commentsList';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            RedditReaderApp,
            PostsPage,
            CommentsPage,
            CommentsList,
            GoodsPage,
            CompanyCreateEdit
        ],
        imports: [
            IonicModule.forRoot(RedditReaderApp),
            MomentModule
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            RedditReaderApp,
            PostsPage,
            CommentsPage,
            GoodsPage,
            CompanyCreateEdit
        ],
        providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map