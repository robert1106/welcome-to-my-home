import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInspirationComponent } from './about-inspiration.component';

describe('AboutInspirationComponent', () => {
  let component: AboutInspirationComponent;
  let fixture: ComponentFixture<AboutInspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInspirationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
