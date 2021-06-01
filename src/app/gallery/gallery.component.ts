import { Component, OnInit } from '@angular/core';
import {TabsetConfig} from "ngx-bootstrap/tabs";

export function getTabsetConfig(): TabsetConfig {
  return Object.assign(new TabsetConfig(), { type: 'pills', isKeysAllowed: true });
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
