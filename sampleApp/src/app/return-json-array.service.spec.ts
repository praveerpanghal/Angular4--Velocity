import { TestBed, inject } from '@angular/core/testing';

import { ReturnJsonArrayService } from './return-json-array.service';

describe('ReturnJsonArrayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReturnJsonArrayService]
    });
  });

  it('should be created', inject([ReturnJsonArrayService], (service: ReturnJsonArrayService) => {
    expect(service).toBeTruthy();
  }));
});
