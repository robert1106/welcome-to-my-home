import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.bsModalRef.hide()
  }

}
