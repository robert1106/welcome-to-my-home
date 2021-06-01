import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutcollection',
  templateUrl: './aboutcollection.component.html',
  styleUrls: ['./aboutcollection.component.scss']
})
export class AboutcollectionComponent implements OnInit {

  constructor() { }

  itemsPerSlide = 4;
  singleSlideOffset = true;

  slides = [
    {
      image: '../../assets/images/about/colletion-1.jpg',
      title: 'Truffaut literally trust',
      description: 'Living room furntiture | Chair'
    }, {
      image: '../../assets/images/about/colletion-2.jpg',
      title: 'Lliterally',
      description: 'Room furntiture | Fhair'
    }, {
      image: '../../assets/images/about/colletion-3.jpg',
      title: 'Truffaut trust',
      description: 'Living urntiture | Chair'
    }, {
      image: '../../assets/images/about/colletion-4.jpg',
      title: 'Trust',
      description: 'Room furntiture | Chair'
    }, {
      image: '../../assets/images/about/colletion-5.jpg',
      title: 'Literally trust',
      description: 'Chair room furntiture | Living'
    },
  ];

  ngOnInit(): void {
  }

}
