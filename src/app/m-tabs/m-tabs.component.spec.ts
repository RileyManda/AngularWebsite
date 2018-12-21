import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTabsComponent } from './m-tabs.component';

describe('MTabsComponent', () => {
  let component: MTabsComponent;
  let fixture: ComponentFixture<MTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
