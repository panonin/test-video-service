import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.styl']
})


export class ChannelsComponent implements OnInit {

  channels = [
    {
      name: 'Первый канал',
      logo: '../../assets/img/first-channel.svg',
      broadcast: [
        {
          time: '13:00',
          name: 'Новости (с субтитрами)',
          isActive: true
        },
        {
          time: '14:00',
          name: 'Давай поженимся',
          isActive: false
        },
        {
          time: '15:00',
          name: 'Другие новости',
          isActive: false
        }
      ]
    },
    {
      name: '2х2',
      logo: '../../assets/img/22-channel.svg',
      broadcast: [
        {
          time: '13:00',
          name: 'МУЛЬТ ТВ. Сезон 4, 7 серия',
          isActive: true
        },
        {
          time: '14:00',
          name: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия',
          isActive: false

        },
        {
          time: '15:00',
          name: 'БУРДАШЕВ. Сезон 1, 20 серия',
          isActive: false
        }
      ]
    },
    {
      name: 'РБК',
      logo: '../../assets/img/rbc-channel.svg',
      broadcast: [
        {
          time: '13:00',
          name: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
          isActive: true
        },
        {
          time: '14:00',
          name: 'ДЕНЬ. Главные темы',
          isActive: false

        },
        {
          time: '15:00',
          name: 'Главные новости',
          isActive: false
        }
      ]
    },
    {
      name: 'AMEDIA PREMIUM',
      logo: '../../assets/img/amedia-channel.svg',
      broadcast: [
        {
          time: '13:00',
          name: 'Клиент всегда мёртв',
          isActive: true

        },
        {
          time: '14:00',
          name: 'Голодные игры: Сойка-пересмешница. Часть I',
          isActive: false

        },
        {
          time: '15:00',
          name: 'Секс в большом городе',
          isActive: false
        }
      ]
    },
    {
      name: 'Первый канал',
      logo: '../../assets/img/first-channel.svg',
      broadcast: [
        {
          time: '13:00',
          name: 'Новости (с субтитрами)',
          isActive: true
        },
        {
          time: '14:00',
          name: 'Давай поженимся',
          isActive: false
        },
        {
          time: '15:00',
          name: 'Другие новости',
          isActive: false
        }
      ]
    },
    {
      name: '2х2',
      logo: '../../assets/img/22-channel.svg',
      broadcast: [
        {
          time: '13:00',
          name: 'МУЛЬТ ТВ. Сезон 4, 7 серия',
          isActive: true
        },
        {
          time: '14:00',
          name: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия',
          isActive: false

        },
        {
          time: '15:00',
          name: 'БУРДАШЕВ. Сезон 1, 20 серия',
          isActive: false
        }
      ]
    },
    {
      name: 'РБК',
      logo: '../../assets/img/rbc-channel.svg',
      broadcast: [
        {
          time: '13:00',
          name: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС',
          isActive: true
        },
        {
          time: '14:00',
          name: 'ДЕНЬ. Главные темы',
          isActive: false

        },
        {
          time: '15:00',
          name: 'Главные новости',
          isActive: false
        }
      ]
    },
    {
      name: 'AMEDIA PREMIUM',
      logo: '../../assets/img/amedia-channel.svg',
      broadcast: [
        {
          time: '13:00',
          name: 'Клиент всегда мёртв',
          isActive: true

        },
        {
          time: '14:00',
          name: 'Голодные игры: Сойка-пересмешница. Часть I',
          isActive: false

        },
        {
          time: '15:00',
          name: 'Секс в большом городе',
          isActive: false
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
