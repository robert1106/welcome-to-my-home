import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcollectionMainComponent } from './newcollection-main.component';

describe('NewcollecteonMineComponent', () => {
  let component: NewcollectionMainComponent;
  let fixture: ComponentFixture<NewcollectionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcollectionMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcollectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
