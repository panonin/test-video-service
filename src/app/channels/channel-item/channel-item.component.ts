import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.styl']
})
export class ChannelItemComponent {
  @Input() name: string;
  @Input() image: string;
  @Input() programs: [];
  @Input() broadcastTime: string;
  @Input() broadcastName: string;
}
