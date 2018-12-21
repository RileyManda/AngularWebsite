import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { MBottomSheetComponent } from './m-bottom-sheet/m-bottom-sheet.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rileymanda';

  constructor(private bottomSheet: MatBottomSheet) {
  }
  openBottomSheet(){

    this.bottomSheet.open(MBottomSheetComponent);

  }
}
