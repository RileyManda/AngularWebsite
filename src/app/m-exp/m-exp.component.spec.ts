import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MExpComponent } from './m-exp.component';

describe('MExpComponent', () => {
  let component: MExpComponent;
  let fixture: ComponentFixture<MExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
