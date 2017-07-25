import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCoinsComponent } from './favourite-coins.component';

describe('FavouriteCoinsComponent', () => {
  let component: FavouriteCoinsComponent;
  let fixture: ComponentFixture<FavouriteCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
