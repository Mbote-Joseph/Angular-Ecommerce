import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRecentComponent } from './seller-recent.component';

describe('SellerRecentComponent', () => {
  let component: SellerRecentComponent;
  let fixture: ComponentFixture<SellerRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
