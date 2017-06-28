import { TestBed, inject } from '@angular/core/testing';

import { CoinHistoryService } from './coin-history.service';

describe('CoinHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinHistoryService]
    });
  });

  it('should be created', inject([CoinHistoryService], (service: CoinHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
