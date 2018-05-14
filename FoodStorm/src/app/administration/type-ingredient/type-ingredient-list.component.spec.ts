import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIngredientListComponent } from './type-ingredient-list.component';

describe('TypeIngredientListComponent', () => {
  let component: TypeIngredientListComponent;
  let fixture: ComponentFixture<TypeIngredientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeIngredientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeIngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
