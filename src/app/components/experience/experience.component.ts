import { Component, OnInit, ElementRef } from '@angular/core';

export interface Experience {
  header: ExperienceHeader;
  responsibilities: string[];
}

export interface ExperienceHeader {
  roles: Experienceroles[];
  company: string;
  location: string;
}

export interface Experienceroles {
  title: string;
  dates: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[];
  isMobile: boolean;
  readonly mobileBreakpoint = 750;

  constructor() {}

  ngOnInit(): void {
    this.isMobile = screen.width < this.mobileBreakpoint;
    window.onresize = () => {
      this.isMobile = screen.width < this.mobileBreakpoint;
    };

    this.experiences = [
      {
        header: {
          roles: [
            {
              title: 'Associate - Software Developer',
              dates: 'July 2020 - Current',
            },
            {
              title: 'Senior Consultant - Software Developer',
              dates: 'July 2019 - July 2020',
            },
            {
              title: 'Consultant - Software Developer',
              dates: 'October 2018 - July 2019',
            },
          ],
          company: 'Allata',
          location: 'Eagle, ID',
        },
        responsibilities: [
          'Work as primary leader for a small team with Slalom Consulting',
          'Determine best practices for promoting diversity and inclusion on internal company websites',
          'Produce a 5-year plan for an internal diversity and inclusion website for Arrow Electronics',
        ],
      },
      {
        header: {
          roles: [
            {
              title: 'Student, B.S. Computer Science',
              dates: 'September 2015 - June 2018',
            },
          ],
          company: 'University of Denver',
          location: 'Denver, CO',
        },
        responsibilities: [
          'BS in Computer Science with minors in Mathematics and Business Administration',
          'Graduated Cum Laude with a final GPA of 3.93',
        ],
      },
      {
        header: {
          roles: [
            {
              title: 'Diversity and Inclusion Specialist, Project Lead',
              dates: 'March 2018 - May 2018',
            },
          ],
          company: 'Slalom Consulting and Arrow Electronics',
          location: 'Denver, CO',
        },
        responsibilities: [
          'Work as primary leader for a small team with Slalom Consulting',
          'Determine best practices for promoting diversity and inclusion on internal company websites',
          'Produce a 5-year plan for an internal diversity and inclusion website for Arrow Electronics',
        ],
      },
      {
        header: {
          roles: [
            {
              title: 'Field Support Specialist',
              dates: 'January 2017 - October 2017',
            },
            {
              title: 'Help Center Representative',
              dates: 'October 2016 - January 2017',
            },
          ],
          company: 'Information Technology, University of Denver',
          location: 'Denver, CO',
        },
        responsibilities: [
          'Assist University of Denver students, faculty, and staff with software and hardware issues such as: network connectivity issues, software installation, malware detection and removal, and more',
          'Support university-owned technology by providing office-to-office service to faculty and staff',
        ],
      },
      {
        header: {
          roles: [
            {
              title: 'Research Associate',
              dates: 'May 2017 - July 2017',
            },
          ],
          company: 'Department of Computer Science, Boise State University',
          location: 'Boise, ID',
        },
        responsibilities: [
          'Conduct research in Software Security under US National Science Foundation Grant CNS 146113',
          'Partner with two other research associates and a Boise State professor to produce two research papers on blockchain technology',
        ],
      },
    ];
  }
}
