import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MChatfabComponent } from './m-chatfab.component';

describe('MChatfabComponent', () => {
  let component: MChatfabComponent;
  let fixture: ComponentFixture<MChatfabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MChatfabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MChatfabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
