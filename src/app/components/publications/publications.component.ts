import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navTo(url: string): void {
    window.location.href = url;
  }
}
