import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.styl']
})
export class NewsListComponent implements OnInit {

  films = [
    {
      image: '../../assets/img/film-1.png',
      name: 'Мульт в кино. Выпуск №103. Некогда грустить!',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века».\n' +
        '      Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире\n' +
        '      киноиндустрии.',
      link: '#'
    },
    {
      image: '../../assets/img/film-2.png',
      name: 'Новый Бэтмен',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века».\n' +
        '      Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире\n' +
        '      киноиндустрии.',
      link: '#'
    },
    {
      image: '../../assets/img/film-3.png',
      name: 'Однажды... в Голливуде',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века».\n' +
        '      Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире\n' +
        '      киноиндустрии.',
      link: '#'
    },
    {
      image: '../../assets/img/film-4.png',
      name: 'Стриптизёрши',
      description: 'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века».\n' +
        '      Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире\n' +
        '      киноиндустрии.',
      link: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}