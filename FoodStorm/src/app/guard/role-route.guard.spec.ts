import { TestBed, async, inject } from '@angular/core/testing';

import { RoleRouteGuard } from './role-route.guard';

describe('RoleRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleRouteGuard]
    });
  });

  it('should ...', inject([RoleRouteGuard], (guard: RoleRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
