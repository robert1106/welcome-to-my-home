import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  returnedArray: any = [];

  itemsPerPage = 4;

  posts = [{
    type: 'post',
    blogMediaPaths: [
      {
        image: '../../assets/images/blog/post1.svg',
      },
    ],
    createdAt: 'August 15, 2020',
    fistAuthor: 'by Ann Summers',
    category: 'Bedroom Furniture',
    title: 'Red selfies edison bulb four dollar toast humblebrag for the furniture',
    info: 'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally ' +
      'williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug ' +
      'selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin ' +
      'edison bulb farm-to-table'
  },{
    type: 'quote',
    description: '“Simplicity is not the goal. It is the by-product of a good idea and modest expectations”',
    author: 'by Ann Summers',
  },{
    type: 'post-video',
    blogMediaPaths: [
      {
        image: '../../assets/images/play_button.svg',
      },
    ],
    createdAt: 'August 12, 2020',
    fistAuthor: 'by Lux Morningstar',
    category: 'Design',
    title: 'Authentic kogi shabby chic'
  },{
    type: 'post',
    blogMediaPaths: [
      {
        image: '../../assets/images/blog/post1.svg',
      },{
        image: '../../assets/images/blog/blog-video.svg',
      }, {
        image: '../../assets/images/blog/slide-blog.svg',
      },
    ],
    createdAt: 'August 15, 2020',
    fistAuthor: 'by Ann Summers',
    category: 'Bedroom Furniture',
    title: 'Red selfies edison bulb four dollar toast humblebrag for the furniture',
    info: 'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally ' +
      'williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug ' +
      'selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin ' +
      'edison bulb farm-to-table'
  },{
    type: 'post',
    blogMediaPaths: [
      {
        image: '../../assets/images/blog/slide-blog.svg',
      },
    ],
    createdAt: 'August 10, 2020',
    fistAuthor: 'by Ann Summers',
    category: 'Simple interiror design',
    title: 'Red humblebrag',
    info: 'Everyday carry a farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug ' +
      'selvage hammock palo santo godard yuccie woke. Ugh pok pok taxidermy pabst enamel pin ' +
      'edison bulb farm-to-table'
  },{
    type: 'post-video',
    blogMediaPaths: [
      {
        image: '../../assets/images/play_button.svg',
      },
    ],
    createdAt: 'August 12, 2020',
    fistAuthor: 'by Lux Morningstar',
    category: 'Design',
    title: 'Authentic kogi shabby chic'
  },{
    type: 'post',
    blogMediaPaths: [
      {
        image: '../../assets/images/blog/slide-blog.svg',
      },
    ],
    createdAt: 'August 11, 2020',
    fistAuthor: 'by Ann Summers',
    category: 'Simple interiror design',
    title: 'Big posts',
    info: 'Everyday carry a farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug ' +
      'selvage hammock palo santo godard yuccie woke. Ugh pok pok taxidermy pabst enamel pin ' +
      'edison bulb farm-to-tableEv dard yuccie woke. Ugh pok pok taxidermy pabst enamel pin ' +
      'edison bulb farm-to-tableEveryday carry a farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug ' +
      'selvage hammock palo santo godard yuccie woke. Ugh pok pok taxidermy pabst enamel pin ' +
      'edison bulb farm-to-table'
  },{
    type: 'post-video',
    blogMediaPaths: [
      {
        image: '../../assets/images/play_button.svg',
      },
    ],
    createdAt: 'August 12, 2020',
    fistAuthor: 'by Lux Morningstar',
    category: 'Office furniture',
    title: 'Authentic kogi shabby chic'
  },{
    type: 'post',
    blogMediaPaths: [
      {
        image: '../../assets/images/blog/post1.svg',
      },{
        image: '../../assets/images/blog/blog-video.svg',
      }, {
        image: '../../assets/images/blog/slide-blog.svg',
      },
    ],
    createdAt: 'August 15, 2020',
    fistAuthor: 'by Ann Summers',
    category: 'Office furniture',
    title: 'Red selfies edison bulb four dollar toast humblebrag for the furniture',
    info: 'Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer. Literally ' +
      'williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug ' +
      'selvage hammock palo santo godard thundercats coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin ' +
      'edison bulb farm-to-table'
  },{
    type: 'post',
    blogMediaPaths: [
      {
        image: '../../assets/images/blog/slide-blog.svg',
      },
    ],
    createdAt: 'August 11, 2020',
    fistAuthor: 'by Ann Summers',
    category: 'Dining room',
    title: 'Big posts',
    info: 'Everyday carry a farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug ' +
      'selvage hammock palo santo godard yuccie woke. Ugh pok pok taxidermy pabst enamel pin ' +
      'edison bulb farm-to-tableEv dard yuccie woke. Ugh pok pok taxidermy pabst enamel pin ' +
      'edison bulb farm-to-tableEveryday carry a farm-to-table mustache ugh deep v irony. Af man bun copper mug iPhone enamel pin pug ' +
      'selvage hammock palo santo godard yuccie woke. Ugh pok pok taxidermy pabst enamel pin ' +
      'edison bulb farm-to-table'
  },];



  ngOnInit(): void {
    this.returnedArray = this.posts.slice(0, 4);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.posts.slice(startItem, endItem);
  }

}
