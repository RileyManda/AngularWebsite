import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../authservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hide:boolean=true;
 

}

