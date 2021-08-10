import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddressComponent } from './seller-address.component';

describe('SellerAddressComponent', () => {
  let component: SellerAddressComponent;
  let fixture: ComponentFixture<SellerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
