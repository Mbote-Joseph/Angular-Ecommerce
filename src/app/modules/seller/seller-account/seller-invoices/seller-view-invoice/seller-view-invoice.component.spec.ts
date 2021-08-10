import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerViewInvoiceComponent } from './seller-view-invoice.component';

describe('SellerViewInvoiceComponent', () => {
  let component: SellerViewInvoiceComponent;
  let fixture: ComponentFixture<SellerViewInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerViewInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerViewInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
