import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceThumbnailComponent } from './space-thumbnail.component';

describe('SpaceThumbnailComponent', () => {
  let component: SpaceThumbnailComponent;
  let fixture: ComponentFixture<SpaceThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
