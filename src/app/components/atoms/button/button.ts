import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IconComponent } from '../icon/icon';

export type ButtonVariant = 'filled' | 'outline' | 'outline-primary';
export type ButtonSize = 'md' | 'sm';

@Component({
  selector: 'ptf-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() variant: ButtonVariant = 'filled';
  @Input() size: ButtonSize = 'md';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() ariaLabel?: string;
  @Input() icon?: string;

  @Output() clicked = new EventEmitter<void>();

  protected handleClick(): void {
    this.clicked.emit();
  }
}
