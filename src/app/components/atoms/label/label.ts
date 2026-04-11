import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ptf-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="label">{{ text }}</span>`,
  styleUrl: './label.scss',
})
export class LabelComponent {
  @Input({ required: true }) text!: string;
}
