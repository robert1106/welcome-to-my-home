import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActiveComponent } from './post-active.component';

describe('PostActiveComponent', () => {
  let component: PostActiveComponent;
  let fixture: ComponentFixture<PostActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
