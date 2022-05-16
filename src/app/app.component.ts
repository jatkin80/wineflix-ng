import {Component} from '@angular/core';
import {faPlay, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wines=[{
 linkImg: "/assets/red-wine.jpg",
 isNew: true,
 wineName: "wine"
  }, {
  linkImg: "/assets/red-wine.jpg",
  isNew: false,
  wineName: "wine"
  }, {
  linkImg: "/assets/red-wine.jpg",
  isNew: true,
  wineName: "wine"
   }, {
    linkImg: "/assets/red-wine.jpg",
    isNew: false,
    wineName: "wine"
   },{
    linkImg: "/assets/red-wine.jpg",
    isNew: true,
    wineName: "wine"
   },{
    linkImg: "/assets/red-wine.jpg",
    isNew: false,
    wineName: "wine"
   },{
    linkImg: "/assets/red-wine.jpg",
    isNew: false,
    wineName: "wine"
   },{
    linkImg: "/assets/red-wine.jpg",
    isNew: false,
    wineName: "wine"
   }

]
  faPlay = faPlay
  faInfoCircle = faInfoCircle
  title = 'angular-template';
}
