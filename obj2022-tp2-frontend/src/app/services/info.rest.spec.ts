import { TestBed } from '@angular/core/testing';

import { InfoRest } from './info.rest';

describe('InfoRest', () => {
  let service: InfoRest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoRest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
