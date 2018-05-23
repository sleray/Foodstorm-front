import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIngredientUpdateComponent } from './type-ingredient-update.component';

describe('TypeIngredientUpdateComponent', () => {
  let component: TypeIngredientUpdateComponent;
  let fixture: ComponentFixture<TypeIngredientUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeIngredientUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeIngredientUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
