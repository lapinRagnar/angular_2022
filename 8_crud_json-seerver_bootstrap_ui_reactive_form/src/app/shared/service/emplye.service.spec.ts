import { TestBed } from '@angular/core/testing';

import { EmplyeService } from './employe.service';

describe('EmplyeService', () => {
  let service: EmplyeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplyeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
