import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DXpComponent } from './d-xp.component';

describe('MXpComponent', () => {
  let component: DXpComponent;
  let fixture: ComponentFixture<DXpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DXpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DXpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
