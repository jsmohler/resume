import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isMobile: boolean;
  readonly mobileBreakpoint = 1250;

  constructor() {}

  ngOnInit(): void {
    this.isMobile = screen.width < this.mobileBreakpoint;
    window.onresize = () => {
      this.isMobile = screen.width < this.mobileBreakpoint;
    };
  }
}
