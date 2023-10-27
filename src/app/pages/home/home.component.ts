import { Component, OnInit } from '@angular/core';

type Idata = {
  image: string;
  name: string;
  description: string;
  releaseDate: Date;
  restorationDate: Date;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'maqueta';
  items: Idata[] = [
    {
      image: '',
      name: 'Item 1',
      description: 'Description for Item 1',
      releaseDate: new Date('2000-02-02'),
      restorationDate: new Date('2000-02-02'),
    },
    {
      image: '',
      name: 'Item 2',
      description: 'Description for Item 2',
      releaseDate: new Date('2000-02-02'),
      restorationDate: new Date('2000-02-02'),
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
