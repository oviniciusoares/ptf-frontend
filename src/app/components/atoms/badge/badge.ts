import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type BadgeVariant = 'primary' | 'outline' | 'availability' | 'production';

@Component({
  selector: 'ptf-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class BadgeComponent {
  @Input({ required: true }) text!: string;
  @Input() variant: BadgeVariant = 'primary';
}
