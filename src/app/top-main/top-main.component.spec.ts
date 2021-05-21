import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMainComponent } from './top-main.component';

describe('MainComponent', () => {
  let component: TopMainComponent;
  let fixture: ComponentFixture<TopMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
