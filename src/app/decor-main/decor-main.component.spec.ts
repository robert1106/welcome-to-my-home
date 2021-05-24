import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorMainComponent } from './decor-main.component';

describe('DecorMainComponent', () => {
  let component: DecorMainComponent;
  let fixture: ComponentFixture<DecorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
