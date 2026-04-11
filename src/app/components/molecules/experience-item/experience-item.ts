import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BadgeComponent } from '../../atoms/badge/badge';

@Component({
  selector: 'ptf-experience-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent],
  templateUrl: './experience-item.html',
  styleUrl: './experience-item.scss',
})
export class ExperienceItemComponent {
  @Input({ required: true }) period!: string;
  @Input({ required: true }) role!: string;
  @Input({ required: true }) company!: string;
  @Input({ required: true }) description!: string;
}
