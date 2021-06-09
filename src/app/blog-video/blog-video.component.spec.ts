import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogVideoComponent } from './blog-video.component';

describe('BlogVideoComponent', () => {
  let component: BlogVideoComponent;
  let fixture: ComponentFixture<BlogVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
