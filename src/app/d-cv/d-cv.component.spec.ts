import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCvComponent } from './d-cv.component';

describe('DCvComponent', () => {
  let component: DCvComponent;
  let fixture: ComponentFixture<DCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
