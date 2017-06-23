import { TestBed, inject } from '@angular/core/testing';

import { TopCoinsService } from './top-coins.service';

describe('TopCoinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopCoinsService]
    });
  });

  it('should be created', inject([TopCoinsService], (service: TopCoinsService) => {
    expect(service).toBeTruthy();
  }));
});
