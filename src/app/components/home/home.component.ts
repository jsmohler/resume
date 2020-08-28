import { Component, OnInit, ElementRef } from '@angular/core';

interface TypewriterContent {
  text: string;
  backspace: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
