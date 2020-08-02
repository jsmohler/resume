import { Component, OnInit, ElementRef } from '@angular/core';

interface TypewriterContent {
  text: string;
  backspace: boolean;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  i: number;
  toRotate: string;
  el: Element;
  loopNum: number;
  txt: string;
  isDeleting: boolean;
  totalCount: number;

  constructor() {}

  ngOnInit() {
    const elements = document.getElementsByClassName('txt-rotate');
    for (let i = 0; i < elements.length; i++) {
      this.toRotate = elements[i].getAttribute('data-rotate');
      const rotatingTexts = JSON.parse(this.toRotate) as string[];
      this.totalCount = rotatingTexts.length;
      if (this.toRotate) {
        this.txtRotate(elements[i], rotatingTexts);
      }
    }

    const css = document.createElement('style');
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);
  }

  txtRotate(el, toRotate): void {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }

  tick(): void {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (this.loopNum === this.totalCount - 1 && this.txt === fullTxt) {
      const style = document.body.getElementsByTagName('style')[0];
      document.body.removeChild(style);
    } else {
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = 1500;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        this.tick();
      }, delta);
    }
  }
}
