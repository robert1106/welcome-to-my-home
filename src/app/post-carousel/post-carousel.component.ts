import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-carousel',
  templateUrl: './post-carousel.component.html',
  styleUrls: ['./post-carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class PostCarouselComponent implements OnInit {

  showNavigationArrows = true;
  showNavigationIndicators = false;
  images = [
    {
      image: '../../assets/images/blog/post1.svg',
    }, {
      image: '../../assets/images/blog/blog-video.svg',
    }, {
      image: '../../assets/images/blog/slide-blog.svg',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
