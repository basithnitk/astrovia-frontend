import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendService } from '../shared/backend.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  public state = new FormControl(false);

  constructor(private backend: BackendService) { }

  ngOnInit(): void {

  }

  toggle(){
    this.backend.updateMarketState(this.state.value).subscribe();
  }
}
