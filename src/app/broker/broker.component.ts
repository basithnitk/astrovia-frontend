import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent implements OnInit {

  stockList;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    qty: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
    price: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
    ticker: new FormControl('', Validators.required)
  });

  constructor(
    private backend: BackendService,
    private dialog: MatDialog,
    private dialogService: DialogService
    ) { }

  ngOnInit(): void {
    this.backend.getStockList().subscribe(
      (res) => { this.stockList = res }
    );
  }

  executeTrade() {
    this.backend.execTrade(this.form.value).subscribe(
      (res) => { console.log(res) },
      (err) => { console.log(1) }
    );
    //if(success)
  }

  reviewTrade() {
    this.dialogService.openConfirmDialog(this.form.value)
    .afterClosed()
    .subscribe(res=>{
      if(res){
        this.executeTrade();
        this.form.reset();
        this.form.setValue({
          $key: null,
          from: '',
          to: '',
          qty: null,
          price: null,
          ticker: null
        });
      }
    });
  }

}
