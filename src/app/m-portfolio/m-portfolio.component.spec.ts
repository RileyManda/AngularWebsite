import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MPortfolioComponent } from './m-portfolio.component';

describe('MPortfolioComponent', () => {
  let component: MPortfolioComponent;
  let fixture: ComponentFixture<MPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
