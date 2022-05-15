import { TestBed } from '@angular/core/testing';

import { ChartRest } from './chart.rest';

describe('ChartRest', () => {
  let service: ChartRest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartRest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
