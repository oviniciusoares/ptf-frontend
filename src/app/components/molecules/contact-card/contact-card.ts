import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon';

@Component({
  selector: 'ptf-contact-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss',
})
export class ContactCardComponent {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) main!: string;
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) href!: string;
}
