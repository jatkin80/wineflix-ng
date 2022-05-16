import { Component } from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hero-two',
  templateUrl: './hero-two.component.html',
  styleUrls: ['./hero-two.component.css']
})
export class HeroTwoComponent {
  faPlay = faPlay
  faInfoCircle = faInfoCircle
  title = 'angular-template';
  }


