import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantDetailThumbnailComponent } from './resturant-detail-thumbnail.component';

describe('SpaceThumbnailsComponent', () => {
  let component: ResturantDetailThumbnailComponent;
  let fixture: ComponentFixture<ResturantDetailThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantDetailThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantDetailThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
