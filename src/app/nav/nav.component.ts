import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @Input() homeUrl = '';
  @Input() whitesUrl = '';
  @Input() redsUrl = '';
  @Input() blendsUrl = '';
}
