import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcollectionComponent } from './aboutcollection.component';

describe('AboutcollectionComponent', () => {
  let component: AboutcollectionComponent;
  let fixture: ComponentFixture<AboutcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutcollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
