import { Component } from '@angular/core';
import { MatBottomSheet, MatDialog, MatDialogModule,MatProgressBar} from '@angular/material';
import { MBottomSheetComponent } from './m-bottom-sheet/m-bottom-sheet.component';
import "hammerjs"
import { MContactmeComponent } from './m-contactme/m-contactme.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rileymanda';
  color = 'accent';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  constructor(private bottomSheet: MatBottomSheet,
    private dialog: MatDialog) {
      
  }
  openBottomSheet(){

    this.bottomSheet.open(MBottomSheetComponent);

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MContactmeComponent, {
     
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }



}

