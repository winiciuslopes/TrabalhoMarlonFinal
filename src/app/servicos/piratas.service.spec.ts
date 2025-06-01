import { TestBed } from '@angular/core/testing';

import { PiratasService } from './piratas.service';

describe('PiratasService', () => {
  let service: PiratasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiratasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
