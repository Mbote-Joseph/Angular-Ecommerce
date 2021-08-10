import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDefaultComponent } from './seller-default.component';

describe('SellerDefaultComponent', () => {
  let component: SellerDefaultComponent;
  let fixture: ComponentFixture<SellerDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
