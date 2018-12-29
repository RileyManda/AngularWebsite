import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-cv',
  templateUrl: './d-cv.component.html',
  styleUrls: ['./d-cv.component.css']
})
export class DCvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cv = [
    {
      id: 1,
      title: 'Current Cv',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
    }
  ];

}
