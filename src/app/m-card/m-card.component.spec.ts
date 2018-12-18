import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCardComponent } from './m-card.component';

describe('MCardComponent', () => {
  let component: MCardComponent;
  let fixture: ComponentFixture<MCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
