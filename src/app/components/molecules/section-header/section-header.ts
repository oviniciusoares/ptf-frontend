import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LabelComponent } from '../../atoms/label/label';
import { HeadingComponent } from '../../atoms/heading/heading';
import type { HeadingSize } from '../../atoms/heading/heading';

@Component({
  selector: 'ptf-section-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LabelComponent, HeadingComponent],
  templateUrl: './section-header.html',
  styleUrl: './section-header.scss',
})
export class SectionHeaderComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) title!: string;
  @Input() highlight = '';
  @Input() size: HeadingSize = 'lg';
}
