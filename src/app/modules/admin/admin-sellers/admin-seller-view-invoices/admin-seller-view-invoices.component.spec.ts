import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellerViewInvoicesComponent } from './admin-seller-view-invoices.component';

describe('AdminSellerViewInvoicesComponent', () => {
  let component: AdminSellerViewInvoicesComponent;
  let fixture: ComponentFixture<AdminSellerViewInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSellerViewInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSellerViewInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
