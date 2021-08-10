import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAccountDeleteComponent } from './seller-account-delete.component';

describe('SellerAccountDeleteComponent', () => {
  let component: SellerAccountDeleteComponent;
  let fixture: ComponentFixture<SellerAccountDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAccountDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAccountDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
