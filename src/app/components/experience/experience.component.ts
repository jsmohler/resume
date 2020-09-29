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
          'Develop full-stack e-commerce website using MySQL, .NET Core REST APIs, AWS Lambda Functions, GraphQL, and Angular2+ with Typescript',
          'Oversee initial design and health of two major API repositories over course of 18 months for large-team, multi-website, agile development project',
          'Lead 4-person team in design, development, and deployment of Robotics Process Automation solutions',
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
          'Assisted University of Denver students, faculty, and staff with software and hardware issues such as: network connectivity issues, software installation, malware detection and removal, and more',
          'Supported university-owned technology by providing office-to-office service to faculty and staff',
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
          'Directed team to create internal website feature strategy promoting a diverse workplace for leading electronics manufacturer',
          'Researched established best design practices for diversity and inclusion sites',
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
          'Conducted research in Software Security under US NSF Grant CNS 146113',
          'Collaborated with research associates and Boise State professors to produce two peer-reviewed research papers on blockchain technology',
        ],
        link: 'https://www.boisestate.edu/coen-cs/',
      },
    ];
  }
}
