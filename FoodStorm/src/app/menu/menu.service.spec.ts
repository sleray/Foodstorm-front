import { TestBed, inject } from '@angular/core/testing';

import { RandomMenuService } from './random-menu.service';

describe('RandomMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomMenuService]
    });
  });

  it('should be created', inject([RandomMenuService], (service: RandomMenuService) => {
    expect(service).toBeTruthy();
  }));
});
