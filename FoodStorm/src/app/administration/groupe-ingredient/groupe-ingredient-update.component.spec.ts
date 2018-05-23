import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeIngredientUpdateComponent } from './groupe-ingredient-update.component';

describe('GroupeIngredientUpdateComponent', () => {
  let component: GroupeIngredientUpdateComponent;
  let fixture: ComponentFixture<GroupeIngredientUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeIngredientUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeIngredientUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
