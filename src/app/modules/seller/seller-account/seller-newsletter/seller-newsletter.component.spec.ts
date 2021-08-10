import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerNewsletterComponent } from './seller-newsletter.component';

describe('SellerNewsletterComponent', () => {
  let component: SellerNewsletterComponent;
  let fixture: ComponentFixture<SellerNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
