import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  itemsPerSlide = 4;

  slides = [
    {
      image: '../../assets/images/about/collation-1.jpg',
      title: 'Truffaut literally trust',
      description: 'Living room furntiture | Chair'
    }, {
      image: '../../assets/images/about/collation-2.jpg',
      title: 'Lliterally',
      description: 'Room furntiture | Fhair'
    }, {
      image: '../../assets/images/about/collation-3.jpg',
      title: 'Truffaut trust',
      description: 'Living urntiture | Chair'
    }, {
      image: '../../assets/images/about/collation-4.jpg',
      title: 'Trust',
      description: 'Room furntiture | Chair'
    }, {
      image: '../../assets/images/about/collation-5.jpg',
      title: 'Literally trust',
      description: 'Chair room furntiture | Living'
    },
  ];

  ngOnInit(): void {
  }

}
