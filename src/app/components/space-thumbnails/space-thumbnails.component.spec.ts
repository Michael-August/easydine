import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceThumbnailsComponent } from './space-thumbnails.component';

describe('SpaceThumbnailsComponent', () => {
  let component: SpaceThumbnailsComponent;
  let fixture: ComponentFixture<SpaceThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceThumbnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
