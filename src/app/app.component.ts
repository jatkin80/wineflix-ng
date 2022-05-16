import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  wines = [
    {
      linkImg: '/assets/red-wine.jpg',
      isNew: true,
      wineName: 'wine',
    },
    {
      linkImg: '/assets/red-wine.jpg',
      isNew: false,
      wineName: 'wine',
    },
    {
      linkImg: '/assets/red-wine.jpg',
      isNew: true,
      wineName: 'wine',
    },
    {
      linkImg: '/assets/red-wine.jpg',
      isNew: false,
      wineName: 'wine',
    },
    {
      linkImg: '/assets/red-wine.jpg',
      isNew: true,
      wineName: 'wine',
    },
    {
      linkImg: '/assets/red-wine.jpg',
      isNew: false,
      wineName: 'wine',
    },
    {
      linkImg: '/assets/red-wine.jpg',
      isNew: false,
      wineName: 'wine',
    },
    {
      linkImg: '/assets/red-wine.jpg',
      isNew: false,
      wineName: 'wine',
    },
  ];
  consumedWines = [
    {
      linkImg: '/assets/red-wine.jpg',
      wineName: 'wine',
      amount: 22,
    },
    {
      linkImg: '/assets/red-wine.jpg',
      wineName: 'wine',
      amount: 46,
    },
    {
      linkImg: '/assets/red-wine.jpg',
      wineName: 'wine',
      amount: 75,
    },
    {
      linkImg: '/assets/red-wine.jpg',
      wineName: 'wine',
      amount: 90,
    },
    {
      linkImg: '/assets/red-wine.jpg',
      wineName: 'wine',
      amount: 36,
    },
    {
      linkImg: '/assets/red-wine.jpg',
      wineName: 'wine',
      amount: 40,
    },
    {
      linkImg: '/assets/red-wine.jpg',
      wineName: 'wine',
      amount: 60,
    },
    {
      linkImg: '/assets/red-wine.jpg',
      wineName: 'wine',
      amount: 100,
    },
  ];
  heroImg = '/assets/rex-goliath-logo.png';
}
