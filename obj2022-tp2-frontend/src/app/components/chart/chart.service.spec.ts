import { TestBed } from '@angular/core/testing';

import { ChartService } from './chart.service';

describe('GraphService', () => {
  let service: ChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
