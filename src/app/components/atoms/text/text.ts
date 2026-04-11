import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type TextVariant = 'primary' | 'secondary' | 'muted';
export type TextSize = 'sm' | 'base' | 'lg';

@Component({
  selector: 'ptf-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './text.html',
  styleUrl: './text.scss',
})
export class TextComponent {
  @Input({ required: true }) content!: string;
  @Input() variant: TextVariant = 'secondary';
  @Input() size: TextSize = 'base';
}
