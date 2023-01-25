import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/shared/backend.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  form: FormGroup;
  stocks: any[];
  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.getStockList()
      .subscribe(
        res => {
          if (Array.isArray(res)) {
            let group = {};
            this.stocks = res;
            res.forEach(stock => {
              group[stock['ticker']] = new FormControl(stock['stockPrice']);
            });
            this.form = new FormGroup(group);
          }
        }
      );
  }

  onSubmit(){
    var payload: object[] = [];
    const obj = this.form.value;
    for(var stock in obj)
      payload.push({
        ticker: stock,
        price: obj[stock]
      })
    
    this.backend.setStockPrice(payload).subscribe(suc=>console.log("Prices changed successfully!"));
  }
}
