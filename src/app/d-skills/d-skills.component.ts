import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,MatPaginator} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';


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
  selector: 'd-skills',
  templateUrl: './d-skills.component.html',
  styleUrls: ['./d-skills.component.css']
})
export class DSkillsComponent implements OnInit {

  mxdisplayedColumns: string[] = ['select', 'skill', 'years', 'matrix'];
  mxdataSource = new MatTableDataSource<MxElement>(MXELEMENT_DATA);
  mxselection = new SelectionModel<MxElement>(true, []);
  
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

  constructor() { }

  ngOnInit() {
  }

}
