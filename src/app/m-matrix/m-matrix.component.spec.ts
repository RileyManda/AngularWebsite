import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MMatrixComponent } from './m-matrix.component';

describe('MMatrixComponent', () => {
  let component: MMatrixComponent;
  let fixture: ComponentFixture<MMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
