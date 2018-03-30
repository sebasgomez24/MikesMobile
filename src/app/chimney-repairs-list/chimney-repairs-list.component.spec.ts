import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyRepairsListComponent } from './chimney-repairs-list.component';

describe('ChimneyRepairsListComponent', () => {
  let component: ChimneyRepairsListComponent;
  let fixture: ComponentFixture<ChimneyRepairsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChimneyRepairsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChimneyRepairsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
