import { TestBed, inject } from '@angular/core/testing';

import { GroupeIngredientService } from './groupe-ingredient.service';

describe('TypeIngredientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupeIngredientService]
    });
  });

  it('should be created', inject([GroupeIngredientService], (service: GroupeIngredientService) => {
    expect(service).toBeTruthy();
  }));
});
