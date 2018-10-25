import { TestBed } from '@angular/core/testing';

import { AdminDeleteService } from './admin-delete.service';

describe('AdminDeleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminDeleteService = TestBed.get(AdminDeleteService);
    expect(service).toBeTruthy();
  });
});
