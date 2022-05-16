import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-consumed-wine',
  templateUrl: './consumed-wine.component.html',
  styleUrls: ['./consumed-wine.component.css']
})
export class ConsumedWineComponent {
@Input() linkImg!:string;
@Input() wineName?:string;
@Input() amount?:number;
}
