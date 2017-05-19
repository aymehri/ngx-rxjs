import { Component, OnInit } from '@angular/core';
import { State, SharedService } from './../shared.service';

@Component({
  selector: 'aymen-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  public state: State;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  submit(): void {
    const state: State = {
      test1: 'bim1',
      test2: 'bim2'
    };
    this.sharedService.updateState(state);
  }

}
