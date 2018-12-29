import { Component, OnInit, Input } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {
  public backgroundImg: SafeStyle;
 
 
  @Input() myObject: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    //this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle('url(/assets/imgs/background-code.jpg' + this.myObject.ImageUrl +')');
    //this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle
   // ('url(/assets/imgs/busicness-code' + this.myObject.ImageUrl + ')');
  }

}
