import { TestBed } from '@angular/core/testing';

import { NometecService } from './nometec.service';

describe('NometecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NometecService = TestBed.get(NometecService);
    expect(service).toBeTruthy();
  });
});
