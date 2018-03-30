import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChimneyAccessoriesListComponent } from './chimney-accessories-list.component';

describe('ChimneyAccessoriesListComponent', () => {
  let component: ChimneyAccessoriesListComponent;
  let fixture: ComponentFixture<ChimneyAccessoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChimneyAccessoriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChimneyAccessoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
