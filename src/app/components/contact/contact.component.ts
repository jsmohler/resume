import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  isMobile: boolean;
  readonly mobileBreakpoint = 400;

  constructor() {}

  ngOnInit(): void {
    this.isMobile = screen.width < this.mobileBreakpoint;
    window.onresize = () => {
      this.isMobile = screen.width < this.mobileBreakpoint;
    };
  }
}
