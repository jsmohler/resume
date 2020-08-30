import { Component, OnInit, ElementRef } from '@angular/core';

export interface Experience {
  header: ExperienceHeader;
  responsibilities: string[];
}

export interface ExperienceHeader {
  title: string;
  company: string;
  location: string;
  dates: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[];

  constructor() {}

  ngOnInit() {
    this.experiences = [
      {
        header: {
          title: 'Associate - Software Developer',
          company: 'Allata',
          location: 'Eagle, ID',
          dates: 'July 2020 - Current',
        },
        responsibilities: [],
      },
      {
        header: {
          title: 'Senior Consultant - Software Developer',
          company: 'Allata',
          location: 'Eagle, ID',
          dates: 'July 2019 - July 2020',
        },
        responsibilities: [],
      },
      {
        header: {
          title: 'Consultant - Software Developer',
          company: 'Allata',
          location: 'Eagle, ID',
          dates: 'October 2018 - July 2019',
        },
        responsibilities: [],
      },
      {
        header: {
          title: 'Student, B.S. Computer Science',
          company: 'University of Denver',
          location: 'Denver, CO',
          dates: 'September 2015 - June 2018',
        },
        responsibilities: [],
      },
      {
        header: {
          title: 'Diversity and Inclusion Specialist, Project Lead',
          company: 'Slalom Consulting and Arrow Electronics',
          location: 'Denver, CO',
          dates: 'March 2018 - May 2018',
        },
        responsibilities: [],
      },
      {
        header: {
          title: 'Help Center Representative, Field Support Specialist',
          company: 'Information Technology, University of Denver',
          location: 'Denver, CO',
          dates: 'October 2016 - October 2017',
        },
        responsibilities: [],
      },
      {
        header: {
          title: 'Research Associate',
          company: 'Department of Computer Science, Boise State University',
          location: 'Boise, ID',
          dates: 'May 2017 - July 2017',
        },
        responsibilities: [],
      },
    ];
  }
}
