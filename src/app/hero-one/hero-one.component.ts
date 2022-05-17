import { Component, Input } from '@angular/core';
import {heroContent} from "../../data"

@Component({
  selector: 'app-hero-one',
  templateUrl: './hero-one.component.html',
  styleUrls: ['./hero-one.component.css']
})
export class HeroOneComponent {
  heroContent= heroContent;
}
