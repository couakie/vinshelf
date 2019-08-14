import { TestBed } from '@angular/core/testing';

import { VinsService } from './vins.service';

describe('VinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinsService = TestBed.get(VinsService);
    expect(service).toBeTruthy();
  });
});
