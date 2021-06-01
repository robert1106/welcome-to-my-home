import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapContactComponent } from './map-contact.component';

describe('MapContactComponent', () => {
  let component: MapContactComponent;
  let fixture: ComponentFixture<MapContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
