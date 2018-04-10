import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConnectionComponent } from './home-connection.component';

describe('HomeConnectionComponent', () => {
  let component: HomeConnectionComponent;
  let fixture: ComponentFixture<HomeConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
