import { TestBed } from '@angular/core/testing';

import { AuthGateServiceService } from './auth-gate-service.service';

describe('AuthGateServiceService', () => {
  let service: AuthGateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
