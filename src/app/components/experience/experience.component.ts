import { Component, OnInit } from '@angular/core';

export interface Experience {
  header: ExperienceHeader;
  responsibilities: string[];
  link: string;
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

  constructor() {}

  ngOnInit(): void {
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
          'Full-stack development using MYSQL, .NET Core REST APIs, AWS Lambda Functions, GraphQL, and Angular2+ with Typescript',
          'Oversee initial design and health of two major API repositories over course of 18 months for large-team, multi-website, agile development project',
          'Lead small team specialized in delivering Robotics Process Automation solutions by directing design, development, and deployment of bots',
        ],
        link: 'https://www.allata.com/',
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
        link: 'https://www.du.edu/it/',
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
          'Lead small team to produce strategy for website feature sets to aid in the promotion of diversity and inclusion',
          'Research established best design practices for diversity and inclusion sites',
        ],
        link: 'https://www.slalom.com/home',
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
          'Conduct research in Software Security under US NSF Grant CNS 146113',
          'Collaborate with other research associates and Boise State professors to produce two research papers on blockchain technology',
        ],
        link: 'https://www.boisestate.edu/coen-cs/',
      },
    ];
  }
}
