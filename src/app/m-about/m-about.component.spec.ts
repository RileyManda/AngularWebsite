import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAboutComponent } from './m-about.component';

describe('AboutComponent', () => {
  let component: MAboutComponent;
  let fixture: ComponentFixture<MAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
