import { Component, Input } from '@angular/core';
import {wines, Wine} from "../data"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
wines: Wine[]=wines;
  heroImg = '/assets/rex-goliath-logo.png';
}
