import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DHobbiesComponent } from './d-hobbies.component';

describe('DHobbiesComponent', () => {
  let component: DHobbiesComponent;
  let fixture: ComponentFixture<DHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
