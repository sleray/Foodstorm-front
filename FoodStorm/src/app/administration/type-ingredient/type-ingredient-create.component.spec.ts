import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIngredientCreateComponent } from './type-ingredient-create.component';

describe('TypeIngredientCreateComponent', () => {
  let component: TypeIngredientCreateComponent;
  let fixture: ComponentFixture<TypeIngredientCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeIngredientCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeIngredientCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
