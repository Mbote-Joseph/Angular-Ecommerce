import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellerInvoicesComponent } from './admin-seller-invoices.component';

describe('AdminSellerInvoicesComponent', () => {
  let component: AdminSellerInvoicesComponent;
  let fixture: ComponentFixture<AdminSellerInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSellerInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSellerInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
