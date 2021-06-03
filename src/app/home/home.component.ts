import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    {
      image: '../../assets/images/content/colletion-1.jpg',
      title: 'Truffaut literally trust',
      description: 'Living room furntiture | Chair'
    }, {
      image: '../../assets/images/content/colletion-2.jpg',
      title: 'Lliterally',
      description: 'Room furntiture | Fhair'
    }, {
      image: '../../assets/images/content/colletion-3.jpg',
      title: 'Truffaut trust',
      description: 'Living urntiture | Chair'
    }, {
      image: '../../assets/images/content/colletion-4.jpg',
      title: 'Trust',
      description: 'Room furntiture | Chair'
    }, {
      image: '../../assets/images/content/colletion-5.jpg',
      title: 'Literally trust',
      description: 'Chair room furntiture | Living'
    },
  ];

  ngOnInit(): void {
  }

}
