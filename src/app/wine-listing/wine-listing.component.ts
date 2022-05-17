import { Component, Input } from '@angular/core';
import { wines, Wine } from '../../data';
@Component({
  selector: 'app-wine-listing',
  templateUrl: './wine-listing.component.html',
  styleUrls: ['./wine-listing.component.css'],
})
export class WineListingComponent {
  wines: Wine[] = wines;
}
