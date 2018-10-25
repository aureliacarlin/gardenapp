import { TestBed } from '@angular/core/testing';

import { PageProductService } from './page-product.service';

describe('PageProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageProductService = TestBed.get(PageProductService);
    expect(service).toBeTruthy();
  });
});
