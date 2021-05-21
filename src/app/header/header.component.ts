import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalsComponent } from "../modals/modals.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: BsModalService) {}

  config = {
    class: 'modals-modal',
    ignoreBackdropClick: false
  };

  ngOnInit(): void {
  }

  openModal() {
    this.modalService.show(ModalsComponent, this.config);
}

}
