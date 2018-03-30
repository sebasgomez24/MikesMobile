import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwingingDoorsListComponent } from './swinging-doors-list.component';

describe('SwingingDoorsListComponent', () => {
  let component: SwingingDoorsListComponent;
  let fixture: ComponentFixture<SwingingDoorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwingingDoorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwingingDoorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
