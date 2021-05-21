import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcollection-main',
  templateUrl: './newcollection-main.component.html',
  styleUrls: ['./newcollection-main.component.scss']
})
export class NewcollectionMainComponent implements OnInit {

  itemsPerSlide = 5;
  singleSlideOffset = true;

  slides = [
    {image: 'assets/images/nature/1.jpg'},
    {image: 'assets/images/nature/2.jpg'},
    {image: 'assets/images/nature/3.jpg'},
    {image: 'assets/images/nature/4.jpg'},
    {image: 'assets/images/nature/5.jpg'},
    {image: 'assets/images/nature/6.jpg'},
    {image: 'assets/images/nature/7.jpg'},
    {image: 'assets/images/nature/8.jpg'},
    {image: 'assets/images/nature/1.jpg'},
    {image: 'assets/images/nature/2.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
