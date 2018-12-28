import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSkillsComponent } from './d-skills.component';

describe('MSkillsComponent', () => {
  let component: DSkillsComponent;
  let fixture: ComponentFixture<DSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
