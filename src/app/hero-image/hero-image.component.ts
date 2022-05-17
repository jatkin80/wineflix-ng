import { Component, Input } from '@angular/core';
import { heroContent } from '../../data';
@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css'],
})
export class HeroImageComponent {
  heroContent = heroContent;
}
