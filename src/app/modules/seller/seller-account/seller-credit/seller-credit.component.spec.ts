import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCreditComponent } from './seller-credit.component';

describe('SellerCreditComponent', () => {
  let component: SellerCreditComponent;
  let fixture: ComponentFixture<SellerCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
