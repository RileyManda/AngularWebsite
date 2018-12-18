import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheetRef,MAT_BOTTOM_SHEET_DATA} from '@angular/material';
@Component({
  selector: 'app-m-bottom-sheet',
  templateUrl: './m-bottom-sheet.component.html',
  styleUrls: ['./m-bottom-sheet.component.css']
})
export class MBottomSheetComponent implements OnInit {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA)public data: any) {}
  ngOnInit() {
  }
}


