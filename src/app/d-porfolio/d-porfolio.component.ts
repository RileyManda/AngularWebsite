import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'd-porfolio',
  templateUrl: './d-porfolio.component.html',
  styleUrls: ['./d-porfolio.component.css']
})
export class DPorfolioComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  selected = 'option2';
  constructor(private _formBuilder: FormBuilder) { }

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
  }
  preview = [
    {
      id: 1,
      title: 'mobile1',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    }
  ];

}
