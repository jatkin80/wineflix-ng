import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-hero-one',
  templateUrl: './hero-one.component.html',
  styleUrls: ['./hero-one.component.css'],
})
export class HeroOneComponent {
  @Input() heroImg = '';
}
