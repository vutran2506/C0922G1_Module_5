import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolListComponent } from './bool-list.component';

describe('BoolListComponent', () => {
  let component: BoolListComponent;
  let fixture: ComponentFixture<BoolListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoolListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
