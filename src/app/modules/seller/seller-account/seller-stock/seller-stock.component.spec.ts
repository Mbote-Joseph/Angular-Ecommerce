import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerStockComponent } from './seller-stock.component';

describe('SellerStockComponent', () => {
  let component: SellerStockComponent;
  let fixture: ComponentFixture<SellerStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
