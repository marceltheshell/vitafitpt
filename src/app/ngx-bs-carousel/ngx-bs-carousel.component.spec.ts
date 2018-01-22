import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBsCarouselComponent } from './ngx-bs-carousel.component';

describe('NgxBsCarouselComponent', () => {
  let component: NgxBsCarouselComponent;
  let fixture: ComponentFixture<NgxBsCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBsCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
