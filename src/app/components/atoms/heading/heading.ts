import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type HeadingLevel = 1 | 2 | 3;
export type HeadingSize = 'hero' | 'xl' | 'lg' | 'md';

@Component({
  selector: 'ptf-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './heading.html',
  styleUrl: './heading.scss',
})
export class HeadingComponent {
  @Input({ required: true }) text!: string;
  @Input() highlight = '';
  @Input() level: HeadingLevel = 2;
  @Input() size: HeadingSize = 'lg';
}
