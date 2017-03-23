import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';
import { AvalonApp } from './app.component';
import { CompaniesPage } from '../pages/companies/companies';
import { GoodsPage } from '../pages/goods/goods'
import { CompanyCreateEdit } from '../pages/company-create-edit/company-create-edit'
import { AvalonApiService } from '../providers/avalon-api-service';


@NgModule({
  declarations: [
    AvalonApp,
    CompaniesPage,
    GoodsPage,
    CompanyCreateEdit
  ],
  imports: [
    IonicModule.forRoot(AvalonApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AvalonApp,
    CompaniesPage,
    GoodsPage,
    CompanyCreateEdit
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AvalonApiService]
})
export class AppModule {}
