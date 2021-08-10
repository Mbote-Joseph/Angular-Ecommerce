import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerInvoiceTableComponent } from './seller-invoice-table.component';

describe('SellerInvoiceTableComponent', () => {
  let component: SellerInvoiceTableComponent;
  let fixture: ComponentFixture<SellerInvoiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerInvoiceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerInvoiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
