import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DPorfolioComponent } from './d-porfolio.component';

describe('DPorfolioComponent', () => {
  let component: DPorfolioComponent;
  let fixture: ComponentFixture<DPorfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DPorfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
