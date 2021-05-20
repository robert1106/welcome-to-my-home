import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.scss']
})
export class RightsideComponent implements OnInit {

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.bsModalRef.hide()
  }

}
