import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource,MatPaginator} from '@angular/material';
//xP(Experience)
export interface XpElement {
  startyear: number;
  endyear: number;
  position: string;
  company: string;
  
  
}
const XPELEMENT_DATA: XpElement[] = [
  {startyear: 2007,endyear: 2007, position: 'Dev', company: 'ewew'},
  {startyear: 2007,endyear: 2007, position: 'Dev', company: 'ewew'},
  {startyear: 2007,endyear: 2007, position: 'Dev', company: 'ewew'},
  {startyear: 2007,endyear: 2007, position: 'Dev', company: 'ewew'},
  {startyear: 2007,endyear: 2007, position: 'Dev', company: 'ewew'},
  {startyear: 2007,endyear: 2007, position: 'Dev', company: 'ewew'},
  {startyear: 2007,endyear: 2007, position: 'Dev', company: 'ewew'},
  {startyear: 2007,endyear: 2007, position: 'Dev', company: 'ewew'},
  {startyear: 2007,endyear: 2007, position: 'Dev', company: 'ewew'},
  {startyear: 2007,endyear: 2007, position: 'Dev', company: 'ewew'},
];

@Component({
  selector: 'app-d-xp',
  templateUrl: './d-xp.component.html',
  styleUrls: ['./d-xp.component.css']
})
export class DXpComponent implements OnInit {

  xpdisplayedColumns: string[] = ['select', 'startyear', 'endyear', 'position', 'company'];
  xpdataSource = new MatTableDataSource<XpElement>(XPELEMENT_DATA);
  xpselection = new SelectionModel<XpElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  


  isXpAllSelected() {
    const numSelected = this.xpselection.selected.length;
    const numRows = this.xpdataSource.data.length;
    return numSelected === numRows;

  }
  xpmasterToggle() {
    this.isXpAllSelected() ?
        this.xpselection.clear() :
        this.xpdataSource.data.forEach(row => this.xpselection.select(row));
  }

  constructor() { }

  ngOnInit() {

    this.xpdataSource.paginator = this.paginator;
  }

}
