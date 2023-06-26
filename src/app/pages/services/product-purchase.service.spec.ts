import { TestBed } from '@angular/core/testing';

import { ProductPurchaseService } from './product-purchase.service';

xdescribe('ProductPurchaseService', () => {
  let service: ProductPurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
