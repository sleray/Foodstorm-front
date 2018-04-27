import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMenuComponent } from './random-menu.component';

describe('RandomMenuComponent', () => {
  let component: RandomMenuComponent;
  let fixture: ComponentFixture<RandomMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
