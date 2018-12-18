import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MBottomSheetComponent } from './m-bottom-sheet.component';

describe('MBottomSheetComponent', () => {
  let component: MBottomSheetComponent;
  let fixture: ComponentFixture<MBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
