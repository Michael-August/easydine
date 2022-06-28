import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantThumbnailsComponent } from './resturant-thumbnails.component';

describe('ResturantThumbnailsComponent', () => {
  let component: ResturantThumbnailsComponent;
  let fixture: ComponentFixture<ResturantThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantThumbnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
