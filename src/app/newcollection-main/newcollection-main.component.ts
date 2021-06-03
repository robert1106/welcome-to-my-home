import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-newcollection-main',
  templateUrl: './newcollection-main.component.html',
  styleUrls: ['./newcollection-main.component.scss']
})
export class NewcollectionMainComponent implements OnInit {

  @Input() slides: any = [];

  constructor() { }

  itemsPerSlide = 4;
  singleSlideOffset = true;

  ngOnInit(): void {
  }

}
