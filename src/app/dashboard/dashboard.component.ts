import { Component,OnInit,ViewChild } from '@angular/core';
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


//Skills Matrix
export interface MxElement {
  skill: string;
  years: number;
  matrix: number;
}
const MXELEMENT_DATA: MxElement[] = [
  {skill: 'Java', years: 5, matrix: 100},
  {skill: 'Php', years: 4, matrix: 50},
  {skill: 'NodeJs', years: 1, matrix: 50},
  {skill:'Swift', years: 4, matrix: 50},
  {skill:'Kotlin', years: 1.5, matrix: 25},
  {skill: 'Android Dev', years: 5, matrix: 100},
  {skill: 'IOS Dev', years: 5, matrix: 100},
  {skill:  'AngularJS', years: 1, matrix: 100},
  {skill: 'UI/UX', years: 5, matrix: 100},
  {skill:  'SQL', years: 4, matrix: 90},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  xpdisplayedColumns: string[] = ['select', 'startyear', 'endyear', 'position', 'company'];
  xpdataSource = new MatTableDataSource<XpElement>(XPELEMENT_DATA);
  xpselection = new SelectionModel<XpElement>(true, []);

  mxdisplayedColumns: string[] = ['select', 'skill', 'years', 'matrix'];
  mxdataSource = new MatTableDataSource<MxElement>(MXELEMENT_DATA);
  mxselection = new SelectionModel<MxElement>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  selected = 'option2';
  constructor(private _formBuilder: FormBuilder) {}


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



  isMxAllSelected() {
    const numSelected = this.mxselection.selected.length;
    const numRows = this.mxdataSource.data.length;
    return numSelected === numRows;

  }
  mxmasterToggle() {
    this.isMxAllSelected() ?
        this.mxselection.clear() :
        this.mxdataSource.data.forEach(row => this.mxselection.select(row));
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
    this.xpdataSource.paginator = this.paginator;
    //this.mxdataSource.paginator = this.paginator;

    
  }

}

