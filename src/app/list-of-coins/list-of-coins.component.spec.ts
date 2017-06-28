import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCoinsComponent } from './list-of-coins.component';

describe('ListOfCoinsComponent', () => {
  let component: ListOfCoinsComponent;
  let fixture: ComponentFixture<ListOfCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
