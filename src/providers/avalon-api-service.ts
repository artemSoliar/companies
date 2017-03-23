import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const BASE_URL: string = 'http://avalon.avalonfaltd.com:3090/companies';

@Injectable()
export class AvalonApiService {
  dataCompanies
  constructor(public http: Http) {
    this.dataCompanies = [];
  }
  getCompanies() {
    let url: string = BASE_URL;
    return this.http.get(url)
  }
  getCompany(company: string) {
    let url: string = `${BASE_URL}/${company}`;
    return this.http.get(url)
  }
  addCompany(company) {
    let url: string = `${BASE_URL}`;
    return this.http.post(url, company)
  }
  deleteCompany(company: string) {
    let url: string = `${BASE_URL}/${company}`;
    return this.http.delete(url)
  }
  updateCompany(currentCompany: string, company) {
    let url: string = `${BASE_URL}/${currentCompany}`;
    return this.http.put(url, company)
  }
}
