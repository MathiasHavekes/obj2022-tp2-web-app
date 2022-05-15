import { TestBed } from '@angular/core/testing';

import { ControlsRest } from './controls.rest';

describe('ControlsRest', () => {
  let service: ControlsRest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlsRest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
