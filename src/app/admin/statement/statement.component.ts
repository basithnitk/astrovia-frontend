import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BackendService } from '../../backend.service';
import { Portfolio } from '../../portfolio.model';

import enIN from "@angular/common/locales/en-IN";
registerLocaleData(enIN,'en-IN');

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  portfolioList;
  displayedColumns = ['teamName', 'cashBalance', 'position', 'networth'];

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.backend.getStatement().subscribe(
      (data) => { 
        console.log(data); 
        this.portfolioList = data 
      }
    );
  }

}
