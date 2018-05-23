import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeIngredientListComponent } from './groupe-ingredient-list.component';

describe('TypeIngredientListComponent', () => {
  let component: GroupeIngredientListComponent;
  let fixture: ComponentFixture<GroupeIngredientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeIngredientListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeIngredientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
