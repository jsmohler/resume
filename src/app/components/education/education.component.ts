import { Component, OnInit } from '@angular/core';

export interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
