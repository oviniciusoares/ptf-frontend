import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ptf-scroll-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './scroll-indicator.html',
  styleUrl: './scroll-indicator.scss',
})
export class ScrollIndicatorComponent {}
