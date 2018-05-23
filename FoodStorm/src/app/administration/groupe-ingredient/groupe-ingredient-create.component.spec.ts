import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeIngredientCreateComponent } from './groupe-ingredient-create.component';

describe('GroupeIngredientCreateComponent', () => {
  let component: GroupeIngredientCreateComponent;
  let fixture: ComponentFixture<GroupeIngredientCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeIngredientCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeIngredientCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
