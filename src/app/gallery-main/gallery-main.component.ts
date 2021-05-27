import { Component, OnInit } from '@angular/core';
import {TabsetConfig} from "ngx-bootstrap/tabs";

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });
}

@Component({
  selector: 'app-gallery-main',
  templateUrl: './gallery-main.component.html',
  styleUrls: ['./gallery-main.component.scss'],
  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
})
export class GalleryMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
