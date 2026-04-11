import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ptf-nav-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-link.html',
  styleUrl: './nav-link.scss',
})
export class NavLinkComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) href!: string;
  @Input() active = false;
}
