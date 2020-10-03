import { Component, OnInit } from '@angular/core';

export interface Skill {
  name: string;
  level: number;
  category: string;
  primary?: boolean;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}
  skills: Skill[];
  primarySkills: Skill[];

  ngOnInit(): void {
    this.skills = [
      {
        name: 'C#',
        level: 5,
        category: 'Language',
        primary: true,
      },
      {
        name: 'Javascript',
        level: 5,
        category: 'Language',
        primary: true,
      },
      {
        name: 'HTML/CSS',
        level: 4,
        category: 'Language',
        primary: true,
      },
      {
        name: 'SQL',
        level: 4,
        category: 'Language',
        primary: true,
      },
      {
        name: 'Java',
        level: 4,
        category: 'Language',
        primary: true,
      },
      {
        name: 'GraphQL',
        level: 3,
        category: 'Language',
        primary: true,
      },
      {
        name: 'C++',
        level: 3,
        category: 'Language',
      },
      {
        name: 'Python',
        level: 2,
        category: 'Language',
        primary: true,
      },
      {
        name: 'Bash',
        level: 2,
        category: 'Language',
        primary: true,
      },
      {
        name: 'Go',
        level: 1,
        category: 'Language',
      },
      {
        name: 'MySQL',
        level: 4,
        category: 'Database',
      },
      {
        name: 'SQL Server',
        level: 4,
        category: 'Database',
      },
      {
        name: 'DynamoDB',
        level: 3,
        category: 'Database',
        primary: true,
      },
      {
        name: 'PostgreSQL',
        level: 3,
        category: 'Database',
      },
      {
        name: 'Neo4j',
        level: 2,
        category: 'Database',
      },
      {
        name: 'MongoDB',
        level: 2,
        category: 'Database',
      },
      {
        name: 'Redis',
        level: 1,
        category: 'Database',
      },
      {
        name: 'HBase',
        level: 1,
        category: 'Database',
      },
      {
        name: '.NET Core',
        level: 5,
        category: 'Framework',
        primary: true,
      },
      {
        name: 'Angular2+',
        level: 4,
        category: 'Framework',
        primary: true,
      },
      {
        name: 'ReactJS',
        level: 3,
        category: 'Framework',
        primary: true,
      },
      {
        name: 'NodeJS',
        level: 3,
        category: 'Language',
        primary: true,
      },
      {
        name: 'Git',
        level: 5,
        category: 'Tooling',
        primary: true,
      },
      {
        name: 'Visual Studio',
        level: 5,
        category: 'Tooling',
        primary: true,
      },
      {
        name: 'VS Code',
        level: 5,
        category: 'Tooling',
      },
      {
        name: 'Jira',
        level: 5,
        category: 'Tooling',
        primary: true,
      },
      {
        name: 'UiPath Studio',
        level: 5,
        category: 'Tooling',
        primary: true,
      },
      {
        name: 'UiPath Orchestrator',
        level: 4,
        category: 'Tooling',
      },
      {
        name: 'Confluence',
        level: 3,
        category: 'Tooling',
        primary: true,
      },
      {
        name: 'CICD',
        level: 3,
        category: 'Tooling',
        primary: true,
      },
      {
        name: 'Docker',
        level: 1,
        category: 'Tooling',
      },
      {
        name: 'CloudWatch',
        level: 5,
        category: 'AWS',
      },
      {
        name: 'AWS Lambda',
        level: 4,
        category: 'AWS',
        primary: true,
      },
      {
        name: 'Systems Manager',
        level: 4,
        category: 'AWS',
      },
      {
        name: 'API Gateway',
        level: 3,
        category: 'AWS',
      },
      {
        name: 'S3',
        level: 3,
        category: 'AWS',
      },
      {
        name: 'AWS CDK',
        level: 2,
        category: 'AWS',
        primary: true,
      },
      {
        name: 'IAM',
        level: 2,
        category: 'AWS',
      },
      {
        name: 'EventBridge',
        level: 2,
        category: 'AWS',
      },
      {
        name: 'SQS',
        level: 2,
        category: 'AWS',
      },
      {
        name: 'Agile / SCRUM',
        level: 5,
        category: 'Methodologies',
        primary: true,
      },
      {
        name: 'Presentations',
        level: 5,
        category: 'Soft Skills',
      },
      {
        name: 'Training',
        level: 4,
        category: 'Soft Skills',
      },
      {
        name: 'Small Team Leadership',
        level: 4,
        category: 'Soft Skills',
      },
      {
        name: 'Documentation',
        level: 3,
        category: 'Soft Skills',
      },
      {
        name: 'OOP',
        level: 5,
        category: 'Patterns',
        primary: true,
      },
      {
        name: 'N-Tier Architecture',
        level: 5,
        category: 'Patterns',
        primary: true,
      },
      {
        name: 'REST',
        level: 4,
        category: 'Patterns',
        primary: true,
      },
      {
        name: 'MVC Pattern',
        level: 4,
        category: 'Patterns',
        primary: true,
      },
    ];
    this.primarySkills = this.skills.filter((s) => s.primary);
  }

  getSkillSubset(page: number, pageSize: number, skills: Skill[]): Skill[] {
    const start = page * pageSize;
    return skills.slice(start, start + pageSize);
  }
}
