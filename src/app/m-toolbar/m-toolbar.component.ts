import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'm-toolbar',
  templateUrl: './m-toolbar.component.html',
  styleUrls: ['./m-toolbar.component.css']
})
export class MToolbarComponent implements OnInit {

 // isHandset$: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
constructor(private breakpointObserver: BreakpointObserver) {}

  

  ngOnInit() {
  }

}
