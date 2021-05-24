import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksMainComponent } from './works-main.component';

describe('WorksMainComponent', () => {
  let component: WorksMainComponent;
  let fixture: ComponentFixture<WorksMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
