import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ptf-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<hr class="divider" role="separator" aria-hidden="true" />`,
  styleUrl: './divider.scss',
})
export class DividerComponent {}
