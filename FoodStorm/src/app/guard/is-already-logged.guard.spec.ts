import { TestBed, async, inject } from '@angular/core/testing';

import { IsAlreadyLoggedGuard } from './is-already-logged.guard';

describe('IsAlreadyLoggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAlreadyLoggedGuard]
    });
  });

  it('should ...', inject([IsAlreadyLoggedGuard], (guard: IsAlreadyLoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
