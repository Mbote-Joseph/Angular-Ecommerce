import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerInboxComponent } from './seller-inbox.component';

describe('SellerInboxComponent', () => {
  let component: SellerInboxComponent;
  let fixture: ComponentFixture<SellerInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerInboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
