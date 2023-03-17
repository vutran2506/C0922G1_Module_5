import { TestBed } from '@angular/core/testing';

import { CoachTypeService } from './coach-type.service';

describe('CoachTypeService', () => {
  let service: CoachTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
