import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.styl']
})
export class FilmItemComponent {
  @Input() link: string;
  @Input() image: string;
  @Input() description: string;
  @Input() title: string;

}
