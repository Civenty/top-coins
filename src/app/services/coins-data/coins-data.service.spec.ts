import { TestBed, inject } from '@angular/core/testing';

import { CoinsDataService } from './coins-data.service';

describe('CoinsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinsDataService]
    });
  });

  it('should be created', inject([CoinsDataService], (service: CoinsDataService) => {
    expect(service).toBeTruthy();
  }));
});
