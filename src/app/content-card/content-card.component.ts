import { Component } from '@angular/core';
import { Content } from 'helper-files/content-interface';
import { ContentList } from 'helper-files/content-list';

@Component({
  selector: 'app-content-card',
  template: `
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <table class="table table-striped table-bordered">
          <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Creator</th>
          </tr>
          </thead>
          <tr *ngFor="let item of contentList.getItems()">
            <td>{{ item.title}}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.creator }}</td>
          </tr>
        </table>
      </div>
    </div>
  `
})
export class ContentCardComponent {
  contentList = new ContentList();
  title = 'B-Robert-MyFavouriteGames';

  constructor() {
    const item1: Content = {
      id: 1,
      title: 'World Of Warcraft',
      description: '(WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment\n',
      creator: 'William Petras,\n' +
        'Kevin Beardslee,\n' +
        'Justin Thavirat',
      imgURL: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/world-of-warcraft-Sylvanas-feature.jpg',
      type: '',
      tags: ['', '']
    };
    const item2: Content = {
      id: 2,
      title: 'Sackboy',
      description: 'A Big Adventure is a 2020 platform game developed by Sumo Digital and published by Sony Interactive Entertainment\n',
      creator: 'Sony Interactive Entertainment',
      imgURL: '',
      type: '',
      tags: ['', '']
    };
    const item3: Content = {
      id: 3,
      title: 'Apex Legends',
      description: 'free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic',
      creator: 'Respawn Entertainment',
      imgURL: '',
      type: '',
      tags: ['', '']
    };
    this.contentList.add(item1);
    this.contentList.add(item2);
    this.contentList.add(item3);
  }
}
