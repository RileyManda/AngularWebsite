import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCvComponent } from './m-cv.component';

describe('MCvComponent', () => {
  let component: MCvComponent;
  let fixture: ComponentFixture<MCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
