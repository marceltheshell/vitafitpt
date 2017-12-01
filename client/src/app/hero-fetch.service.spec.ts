import { TestBed, inject } from '@angular/core/testing';

import { HeroFetchService } from './hero-fetch.service';

describe('HeroFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroFetchService]
    });
  });

  it('should be created', inject([HeroFetchService], (service: HeroFetchService) => {
    expect(service).toBeTruthy();
  }));
});
