import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aymen-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  test1$ = this.sharedService.select<string>('test1');
  test2$ = this.sharedService.select<string>('test2');

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
