import { TestBed } from '@angular/core/testing';

import { AlertRest } from './alert.rest';

describe('AlertRest', () => {
  let service: AlertRest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertRest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
