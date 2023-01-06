import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trade } from './broker/trade.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl: string = `http://localhost:8080/`;
  private reportUrl: string = `${this.baseUrl}admin/generateReport`;
  private tradeUrl: string = `${this.baseUrl}broker/trade`;
  private stockListUrl: string = `${this.baseUrl}broker/stocks`;

  constructor(private http: HttpClient) { }

  getStatement() {
    return this.http.get(this.reportUrl);
  }

  execTrade(body: Trade){
    return this.http.post(this.tradeUrl,body);
  }

  getStockList(){
    return this.http.get(this.stockListUrl);
  }

}
