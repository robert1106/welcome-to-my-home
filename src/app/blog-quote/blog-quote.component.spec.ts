import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogQuoteComponent } from './blog-quote.component';

describe('BlogQuoteComponent', () => {
  let component: BlogQuoteComponent;
  let fixture: ComponentFixture<BlogQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
