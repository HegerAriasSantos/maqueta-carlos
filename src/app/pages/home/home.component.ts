import { Component, OnInit } from '@angular/core';

type Idata = {
  image: string;
  name: string;
  description: string;
  releaseDate: Date;
  restorationDate: Date;
  director: string;
  genre: string;
  rating: number;
  durationMinutes: number;
  actors: string[];
  language: string;
  country: string;
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
      image: 'movie1.jpg',
      name: 'Movie 1',
      description: 'An exciting adventure in a far-off land.',
      releaseDate: new Date('2022-01-15'),
      restorationDate: new Date('2023-05-20'),
      director: 'John Director',
      genre: 'Adventure',
      rating: 7.5,
      durationMinutes: 120,
      actors: ['Actor 1', 'Actor 2', 'Actor 3'],
      language: 'English',
      country: 'USA',
    },
    {
      image: 'movie2.jpg',
      name: 'Movie 2',
      description: 'A heartwarming story of friendship and love.',
      releaseDate: new Date('2022-03-10'),
      restorationDate: new Date('2023-06-25'),
      director: 'Jane Director',
      genre: 'Romance',
      rating: 8.2,
      durationMinutes: 105,
      actors: ['Actor 4', 'Actor 5', 'Actor 6'],
      language: 'Spanish',
      country: 'Spain',
    },
    {
      image: 'movie3.jpg',
      name: 'Movie 3',
      description: 'A thrilling action-packed film.',
      releaseDate: new Date('2022-05-20'),
      restorationDate: new Date('2023-07-15'),
      director: 'Michael Director',
      genre: 'Action',
      rating: 6.9,
      durationMinutes: 135,
      actors: ['Actor 7', 'Actor 8', 'Actor 9'],
      language: 'English',
      country: 'USA',
    },
    {
      image: 'movie4.jpg',
      name: 'Movie 4',
      description: 'A hilarious comedy for all ages.',
      releaseDate: new Date('2022-07-12'),
      restorationDate: new Date('2023-08-30'),
      director: 'Sarah Director',
      genre: 'Comedy',
      rating: 7.8,
      durationMinutes: 95,
      actors: ['Actor 10', 'Actor 11', 'Actor 12'],
      language: 'English',
      country: 'UK',
    },
    {
      image: 'movie5.jpg',
      name: 'Movie 5',
      description:
        'A mysterious thriller that will keep you on the edge of your seat.',
      releaseDate: new Date('2022-09-05'),
      restorationDate: new Date('2023-10-10'),
      director: 'David Director',
      genre: 'Thriller',
      rating: 8.0,
      durationMinutes: 130,
      actors: ['Actor 13', 'Actor 14', 'Actor 15'],
      language: 'English',
      country: 'Canada',
    },
  ];

  // You can continue adding more records in the same format as above to create a total of 20 records.

  constructor() {}

  ngOnInit(): void {}
}
