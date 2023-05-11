import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDetailsService {

  constructor(private http: HttpClient) { }

  getHeaderDetails(){
    return this.http.get('.netlify/functions/getHeaderDetails');
  }

  getFooterDetails(){
    return this.http.get('.netlify/functions/getFooterDetails');
  }

  getBodyDetails() {
    return this.http.get('.netlify/functions/getBodyDetails');
  }

  getTextDetails() {
    return this.http.get('.netlify/functions/getTextDetails');
  }
}
