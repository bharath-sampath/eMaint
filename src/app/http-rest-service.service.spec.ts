import { TestBed } from '@angular/core/testing';

import { HttpRestServiceService } from './http-rest-service.service';

describe('HttpRestServiceService', () => {
  let service: HttpRestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
