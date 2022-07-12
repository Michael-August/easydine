import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantDetailComponent } from './resturant-detail.component';

describe('ResturantDetailComponent', () => {
  let component: ResturantDetailComponent;
  let fixture: ComponentFixture<ResturantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
