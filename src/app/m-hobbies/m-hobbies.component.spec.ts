import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MHobbiesComponent } from './m-hobbies.component';

describe('MHobbiesComponent', () => {
  let component: MHobbiesComponent;
  let fixture: ComponentFixture<MHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
