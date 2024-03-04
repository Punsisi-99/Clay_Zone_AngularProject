import { TestBed } from '@angular/core/testing';

import { OrederDetailsService } from './oreder-details.service';

describe('OrederDetailsService', () => {
  let service: OrederDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrederDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
