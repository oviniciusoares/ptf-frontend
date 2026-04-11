import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BadgeComponent } from '../../atoms/badge/badge';

@Component({
  selector: 'ptf-project-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BadgeComponent],
  templateUrl: './project-item.html',
  styleUrl: './project-item.scss',
})
export class ProjectItemComponent {
  @Input({ required: true }) number!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) status!: string;
  @Input({ required: true }) year!: number;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) tags!: string[];
}
