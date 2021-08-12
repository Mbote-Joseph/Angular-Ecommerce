import { TestBed } from '@angular/core/testing';

import { AccountSellerService } from './account-seller.service';

describe('AccountSellerService', () => {
  let service: AccountSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
