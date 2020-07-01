import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  typewriterContent: string = 'Jordan Mohler';

  constructor() {}

  ngOnInit() {}
}
