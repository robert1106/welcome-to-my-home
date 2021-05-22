import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcollection-main',
  templateUrl: './newcollection-main.component.html',
  styleUrls: ['./newcollection-main.component.scss']
})
export class NewcollectionMainComponent implements OnInit {

  constructor() { }

  itemsPerSlide = 5;
  singleSlideOffset = true;

  slides = [
    {image: '../../assets/images/content/colletion-1.jpg'},
    {image: '../../assets/images/content/colletion-2.jpg'},
    {image: '../../assets/images/content/colletion-3.jpg'},
    {image: '../../assets/images/content/colletion-4.jpg'},
    {image: '../../assets/images/content/colletion-5.jpg'}
  ];

  ngOnInit(): void {
  }

}
