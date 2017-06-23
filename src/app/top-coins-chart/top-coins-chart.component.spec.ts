import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCoinsChartComponent } from './top-coins-chart.component';

describe('TopCoinsChartComponent', () => {
  let component: TopCoinsChartComponent;
  let fixture: ComponentFixture<TopCoinsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCoinsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCoinsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
