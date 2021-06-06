import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  itemsPerSlide = 4;

  slides = [
    {
      image: '../../assets/images/content/collation-1.jpg',
      title: 'Truffaut literally trust',
      description: 'Living room furntiture | Chair'
    }, {
      image: '../../assets/images/content/collation-2.jpg',
      title: 'Lliterally',
      description: 'Room furntiture | Fhair'
    }, {
      image: '../../assets/images/content/collation-3.jpg',
      title: 'Truffaut trust',
      description: 'Living urntiture | Chair'
    }, {
      image: '../../assets/images/content/collation-4.jpg',
      title: 'Trust',
      description: 'Room furntiture | Chair'
    }, {
      image: '../../assets/images/content/collation-5.jpg',
      title: 'Literally trust',
      description: 'Chair room furntiture | Living'
    },
  ];

  ngOnInit(): void {
  }

}
