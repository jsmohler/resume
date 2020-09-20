import { Component, OnInit } from '@angular/core';

export interface Skill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}
  languageSkills: Skill[];
  databaseSkills: Skill[];
  frameworkSkills: Skill[];
  toolingSkills: Skill[];
  certificationSkills: Skill[];
  awsSkills: Skill[];
  softSkills: Skill[];
  methodologySkills: Skill[];
  patternSkills: Skill[];

  ngOnInit(): void {
    this.languageSkills = [
      {
        name: 'C#',
        level: 5,
      },
      {
        name: 'Javascript',
        level: 5,
      },
      {
        name: 'HTML/CSS',
        level: 4,
      },
      {
        name: 'SQL',
        level: 4,
      },
      {
        name: 'Java',
        level: 4,
      },
      {
        name: 'GraphQL',
        level: 3,
      },
      {
        name: 'C++',
        level: 3,
      },
      {
        name: 'Python',
        level: 2,
      },
      {
        name: 'Bash',
        level: 2,
      },
      {
        name: 'Go',
        level: 1,
      },
    ];

    this.databaseSkills = [
      {
        name: 'MySQL',
        level: 4,
      },
      {
        name: 'SQL Server',
        level: 4,
      },
      {
        name: 'DynamoDB',
        level: 3,
      },
      {
        name: 'PostgreSQL',
        level: 3,
      },
      {
        name: 'Neo4j',
        level: 2,
      },
      {
        name: 'MongoDB',
        level: 2,
      },
      {
        name: 'Redis',
        level: 1,
      },
      {
        name: 'HBase',
        level: 1,
      },
    ];

    this.frameworkSkills = [
      {
        name: '.NET Core',
        level: 5,
      },
      {
        name: 'Angular2+',
        level: 4,
      },
      {
        name: 'ReactJS',
        level: 3,
      },
      {
        name: 'Express.js',
        level: 3,
      },
    ];

    this.toolingSkills = [
      {
        name: 'Git',
        level: 5,
      },
      {
        name: 'Visual Studio',
        level: 5,
      },
      {
        name: 'VS Code',
        level: 5,
      },
      {
        name: 'Jira',
        level: 5,
      },
      {
        name: 'UiPath Studio',
        level: 5,
      },
      {
        name: 'UiPath Orchestrator',
        level: 4,
      },
      {
        name: 'Confluence',
        level: 3,
      },
      {
        name: 'Bitbucket Pipelines / CICD',
        level: 3,
      },
      {
        name: 'Docker',
        level: 1,
      },
    ];

    this.certificationSkills = [
      {
        name: 'RPA Advanced Developer (UiPath)',
        level: null,
      },
    ];

    this.awsSkills = [
      {
        name: 'CloudWatch',
        level: 5,
      },
      {
        name: 'Lambda',
        level: 4,
      },
      {
        name: 'Systems Manager',
        level: 4,
      },
      {
        name: 'API Gateway',
        level: 3,
      },
      {
        name: 'S3',
        level: 3,
      },
      {
        name: 'CDK',
        level: 2,
      },
      {
        name: 'IAM',
        level: 2,
      },
      {
        name: 'EventBridge',
        level: 2,
      },
      {
        name: 'SQS',
        level: 2,
      },
    ];

    this.methodologySkills = [
      {
        name: 'Agile / SCRUM',
        level: 5,
      },
    ];

    this.softSkills = [
      {
        name: 'Presentations',
        level: 5,
      },
      {
        name: 'Training',
        level: 4,
      },
      {
        name: 'Small Team Leadership',
        level: 4,
      },
      {
        name: 'Documentation',
        level: 3,
      },
    ];

    this.methodologySkills = [
      {
        name: 'Agile / SCRUM',
        level: 5,
      },
    ];

    this.patternSkills = [
      {
        name: 'OOP',
        level: 5,
      },
      {
        name: 'N-Tier Architecture',
        level: 5,
      },
      {
        name: 'REST',
        level: 4,
      },
      {
        name: 'MVC Pattern',
        level: 4,
      },
    ];
  }
}
