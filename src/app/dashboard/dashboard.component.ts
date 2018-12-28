import { Component,OnInit,ViewChild } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    
  }

}

