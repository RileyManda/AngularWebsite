import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MContactmeComponent } from './m-contactme.component';

describe('MContactmeComponent', () => {
  let component: MContactmeComponent;
  let fixture: ComponentFixture<MContactmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MContactmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MContactmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
