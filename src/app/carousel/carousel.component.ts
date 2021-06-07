import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() slides: any = [];
  @Input() itemsPerSlide: number = 0;
  @Input() hideBottomIndicator: boolean = false;
  @Input() singleSlideOffset: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
