import { Component,OnInit,ViewChild } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource,MatPaginator} from '@angular/material';
export interface PeriodicElement {
  name: string;
  position: number;
  years: number;
  xp: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Java', years: 5, xp: 'bar'},
  {position: 2, name: 'Php', years: 4, xp: 'bar'},
  {position: 3, name: 'NodeJs', years: 1, xp: 'bar'},
  {position: 4, name: 'Swift', years: 4, xp: 'bar'},
  {position: 5, name: 'Kotlin', years: 1.5, xp: 'bar'},
  {position: 6, name: 'Android Dev', years: 5, xp: 'bar'},
  {position: 7, name: 'IOS Dev', years: 14.0067, xp: 'bar'},
  {position: 8, name: 'AngularJS', years: 15.9994, xp: 'bar'},
  {position: 9, name: 'UI/UX', years: 18.9984, xp: 'uiux'},
  {position: 10, name: 'SQL', years: 20.1797, xp: 'sql'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'years', 'xp'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  selected = 'option2';
  constructor(private _formBuilder: FormBuilder) {}


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;

  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required]
    });
    this.dataSource.paginator = this.paginator;

    
  }

}

