import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSalesChartComponent } from './seller-sales-chart.component';

describe('SellerSalesChartComponent', () => {
  let component: SellerSalesChartComponent;
  let fixture: ComponentFixture<SellerSalesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSalesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
