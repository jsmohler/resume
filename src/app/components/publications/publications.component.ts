import { Component, OnInit } from '@angular/core';

export interface Publication {
  title: string;
  journal: string;
  link: string;
  citation: string;
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent implements OnInit {
  publications: Publication[];

  constructor() {}

  ngOnInit(): void {
    this.publications = [
      {
        title:
          'Ancile: Privacy-preserving framework for access control and interoperability of electronic health records using blockchain technology',
        journal: 'Sustainable Cities and Society ',
        link:
          'https://www.sciencedirect.com/science/article/abs/pii/S2210670717310685?via%3Dihub',
        citation:
          'Gaby G. Dagher, Jordan Mohler, Matea Milojkovic, Praneeth Babu Marella. Ancile: Privacy-preserving framework for access control and interoperability of electronic health records using blockchain technology. Sustainable Cities and Society, Volume 39, 2018, Pages 283-297, ISSN 2210-6707',
      },
      {
        title:
          'GenVote: Blockchain-Based Customizable and Secure Voting Platform',
        journal:
          'ICISSP: International Conference on Information Systems Security and Privacy',
        link: 'https://link.springer.com/chapter/10.1007/978-3-030-25109-3_8',
        citation:
          'Marella P.B., Milojkovic M., Mohler J., Dagher G.G. (2019) GenVote: Blockchain-Based Customizable and Secure Voting Platform. In: Mori P., Furnell S., Camp O. (eds) Information Systems Security and Privacy. ICISSP 2018. Communications in Computer and Information Science, vol 977. Springer, Cham.',
      },
    ];
  }
}
