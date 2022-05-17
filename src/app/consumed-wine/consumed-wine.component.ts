import { Component, Input } from '@angular/core';
import {wines, Wine} from "../../data"
@Component({
  selector: 'app-consumed-wine',
  templateUrl: './consumed-wine.component.html',
  styleUrls: ['./consumed-wine.component.css'],
})
export class ConsumedWineComponent {
  wines: Wine[]=wines;
}
