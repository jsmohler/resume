import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private renderer2: Renderer2
  ) {}
  isCollapsed = false;
  listener;
  tabIndex = 0;

  ngOnInit(): void {
    this.route.fragment.subscribe((frag) => {
      this.scrollToSection(frag);
    });
    const offsets = [
      {
        section: 'about',
        offset: document.getElementById('about').offsetTop,
      },
      {
        section: 'skills',
        offset: document.getElementById('skills').offsetTop,
      },
      {
        section: 'experience',
        offset: document.getElementById('experience').offsetTop,
      },
      {
        section: 'publications',
        offset: document.getElementById('publications').offsetTop,
      },
      {
        section: 'contact',
        offset: document.getElementById('contact').offsetTop,
      },
    ];
    // this.listener = this.renderer2.listen('window', 'scroll', (e) => {
    //   const position = window.scrollY;
    //   offsets.forEach((o, index) => {
    //     if (
    //       position > o.offset &&
    //       (index === offsets.length - 1 || position < offsets[index + 1].offset)
    //     ) {
    //       this.tabIndex = index;
    //     }
    //   });
    // });
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.router.navigate(['./'], { fragment: section });
    }
  }
}
