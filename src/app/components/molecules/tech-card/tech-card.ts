import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponent } from '../../atoms/icon/icon';

@Component({
  selector: 'ptf-tech-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './tech-card.html',
  styleUrl: './tech-card.scss',
})
export class TechCardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) category!: string;
  @Input({ required: true }) icon!: string;
}
