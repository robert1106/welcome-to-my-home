import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  itemsPerSlide = 7;
  singleSlideOffset = false;

  slides = [
    {
      image: '../../assets/images/content/collation-1.jpg',
      title: 'Truffaut literally trust'
    },{
      image: '../../assets/images/content/collation-2.jpg',
      title: 'Lliterally'
    },{
      image: '../../assets/images/content/collation-3.jpg',
      title: 'Truffaut trust'
    },{
      image: '../../assets/images/content/collation-4.jpg',
      title: 'Trust'
    },{
      image: '../../assets/images/content/collation-5.jpg',
      title: 'Literally trust'
    },{
      image: '../../assets/images/about/collation-1.jpg',
      title: 'Truffaut literally trust'
    },{
      image: '../../assets/images/about/collation-2.jpg',
      title: 'Lliterally'
    },{
      image: '../../assets/images/about/collation-3.jpg',
      title: 'Truffaut trust'
    },{
      image: '../../assets/images/about/collation-4.jpg',
      title: 'Literally trust'
    },{
      image: '../../assets/images/about/collation-5.jpg',
      title: 'Literally trust'
    },{
      image: '../../assets/images/content/collation-1.jpg',
      title: 'Truffaut literally trust'
    },{
      image: '../../assets/images/content/collation-2.jpg',
      title: 'Lliterally'
    },{
      image: '../../assets/images/content/collation-3.jpg',
      title: 'Truffaut trust'
    },{
      image: '../../assets/images/content/collation-4.jpg',
      title: 'Trust'
    },{
      image: '../../assets/images/content/collation-5.jpg',
      title: 'Literally trust'
    },{
      image: '../../assets/images/about/collation-1.jpg',
      title: 'Truffaut literally trust'
    },{
      image: '../../assets/images/about/collation-2.jpg',
      title: 'Lliterally'
    },{
      image: '../../assets/images/about/collation-3.jpg',
      title: 'Truffaut trust'
    },{
      image: '../../assets/images/about/collation-4.jpg',
      title: 'Literally trust'
    },{
      image: '../../assets/images/about/collation-5.jpg',
      title: 'Literally trust'
    },{
      image: '../../assets/images/about/collation-1.jpg',
      title: 'Literally trust'
    },
  ];

  ngOnInit(): void {
  }

}
