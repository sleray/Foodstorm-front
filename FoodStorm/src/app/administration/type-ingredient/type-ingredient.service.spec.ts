import { TestBed, inject } from '@angular/core/testing';

import { TypeIngredientService } from './type-ingredient.service';

describe('TypeIngredientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeIngredientService]
    });
  });

  it('should be created', inject([TypeIngredientService], (service: TypeIngredientService) => {
    expect(service).toBeTruthy();
  }));
});
