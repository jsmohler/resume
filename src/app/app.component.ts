import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  isCollapsed = false;

  ngOnInit(): void {
    this.route.fragment.subscribe((frag) => {
      this.scrollToSection(frag);
    });
  }

  scrollToSection(section: string): void {
    const element = document.querySelector('#' + section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.router.navigate(['./'], { fragment: section });
    }
  }
}
